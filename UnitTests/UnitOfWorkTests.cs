using NUnit.Framework;
using System;
using System.Data.SQLite;
using System.Configuration;
using System.Collections.Generic;
using RoundTheClock.Core.Database;
using RoundTheClock.Core.Model;
using System.IO;
using System.Globalization;
using Dapper;

namespace RoundTheClock.UnitTests
{
    [TestFixture]
    public class UnitOfWorkTest
    {
        private UnitOfWork _unitOfWork;
        private string _fullConnectionString;
        
        [SetUp]
        public void SetUp()
        {
            var _connectionString = ConfigurationManager.ConnectionStrings["dbConnection"].ConnectionString;
            _fullConnectionString = "Data Source=" + Path.Combine(Environment.CurrentDirectory, _connectionString);

            _unitOfWork = new UnitOfWork(_connectionString);

            // initialize tables such that FindUncommittedByCustomer works.
            // Does not make Insert() test redundant as this checks through _unitOfWork
            SetUpTables();
        }

        [Test]
        public void FindUncommittedByCustomer()
        {
            var result = _unitOfWork.FindUncommittedByCustomer(CustomerEnum.EnergiMidt);
            Assert.IsTrue(result.Count == 1);
        }

        [Test]
        public void Insert()
        {
            var timeEntries = new List<TimeEntry> {
                new TimeEntry { Project = "EnergiMidt", Task = "Nyt website - MitEnergiMidt.dk", Hours = 3, Date = DateTime.Parse("2014-12-27").Date, Customer = CustomerEnum.EnergiMidt },
                new TimeEntry { Project = "Internt", Task = "Testfællesskab", Hours = 1, Date = DateTime.Parse("2014-11-09").Date }
            };
            var noRows = _unitOfWork.Insert(timeEntries);
            Assert.IsTrue(noRows == 2);
        }

        [Test]
        [ExpectedException(typeof(SQLiteException))]
        public void InsertDuplicate()
        {
            var timeEntries = new List<TimeEntry> {
                new TimeEntry { Project = "EnergiMidt", Task = "Nyt website - MitEnergiMidt.dk", Hours = 3, Date = DateTime.Parse("2014-12-21").Date, Customer = CustomerEnum.EnergiMidt },
                new TimeEntry { Project = "EnergiMidt", Task = "Nyt website - MitEnergiMidt.dk", Hours = 3, Date = DateTime.Parse("2014-12-21").Date, Customer = CustomerEnum.EnergiMidt }
            };
            var noRows = _unitOfWork.Insert(timeEntries);
            Assert.IsTrue(noRows == 1);
        }

        [TearDown] // clean up database
        public void TearDown()
        {
            ClearTables();
        }

        public void SetUpTables()
        {
            var timeEntries = new List<TimeEntry> {
                // modify these!!!
                new TimeEntry { Project = "EnergiMidt", Task = "Nyt website - MitEnergiMidt.dk", Hours = 3, Date = DateTime.Parse("2014-12-27").Date, Customer = CustomerEnum.EnergiMidt },
                new TimeEntry { Project = "Internt", Task = "Testfællesskab", Hours = 1, Date = DateTime.Parse("2014-11-09").Date }
            };

            using (var conn = new SQLiteConnection(_fullConnectionString))
            {
                conn.Execute("INSERT INTO " + DbConnection.TimeEntryTable + "(Project, Task, Hours, Date, Customer) VALUES (@Project, @Task, @Hours, @Date, @Customer)", timeEntries.Select(entry => TimeEntryDAO.Adapt(entry)));
            }
        }

        public void ClearTables()
        {
            using (var conn = new SQLiteConnection(_fullConnectionString))
            {
                conn.Execute("DELETE FROM " + DbConnection.TimeEntryTable);
                foreach (var customerTable in Enum.GetNames(typeof(CustomerEnum)))
                {
                    conn.Execute("DELETE FROM " + customerTable);
                }
            }
        }
    }
}


