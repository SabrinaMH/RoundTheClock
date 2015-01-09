using RoundTheClock.Core.Model;
using System;
using System.Collections.Generic;
using System.Data.SQLite;
using System.Linq;
using System.Web;
using Dapper;

namespace RoundTheClock.Core.Database
{
    public class UnitOfWork
    {
        private readonly DbConnection _dbConnection;

        public UnitOfWork(string connectionString)
        {
            _dbConnection = new DbConnection(connectionString);
        }

        /// <summary>
        /// Returns the time entries present in the time entries table, but not in the customer table
        /// </summary>
        public List<TimeEntry> FindUncommittedByCustomer(CustomerEnum customer)
        {
            using (var conn = _dbConnection.Connection)
            {
                var customerAsString = Enum.GetName(typeof(CustomerEnum), customer);
                return conn.Query<TimeEntryDAO>(
                    "Select * from " + DbConnection.TimeEntryTable +
                    " where `Date` > (select max(Date) from " + customerAsString + ")" +
                    " and `Customer` = '" + customerAsString + "'").ToList();
            }
        }

        public int Insert(List<TimeEntry> entries)
        {
            using (var conn = _dbConnection.Connection)
            {
                return conn.Execute(
                    "Insert into " + DbConnection.TimeEntryTable +
                    " values (@Project, @Task, @Hours, @Date, @Customer)",
                    entries.Select(entry => TimeEntryDAO.Adapt(entry)));
            }
        }
    }
}