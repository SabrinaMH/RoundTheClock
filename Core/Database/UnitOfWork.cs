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
        private readonly SQLiteConnection _sqliteConnection;

        public UnitOfWork(string connectionString)
        {
            var dbConnection = new DbConnection(connectionString);
            _sqliteConnection = dbConnection.Connection;
            _sqliteConnection.Open();
        }

        /// <summary>
        /// Returns the time entries present in the time entries table, but not in the customer table
        /// </summary>
        public List<TimeEntry> FindUncommittedByCustomer(CustomerEnum customer)
        {
            DateTime lastCommitted = _sqliteConnection.ExecuteScalar<DateTime>("Select max(Date) from " + customer);

        }

        public int Insert(List<TimeEntry> entries)
        {

        }
    }
}