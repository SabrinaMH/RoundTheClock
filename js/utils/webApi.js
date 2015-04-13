'use strict';

var $ = require('jquery');
var dateTimeFormatters = require('./dateTimeFormatters');

var webApi = {
	getCustomers: function(){
		return $.ajax({
			type: 'GET',
			url: 'http://localhost:50363/Customer',
			dataType: 'json'
		});
	},

	saveTimeEntry: function(timeEntry){
		// Transform data to meet the agreed protocol
		var data = {
			customer: timeEntry.customer.Name,
			project: timeEntry.project.Name,
			task: timeEntry.task.Name,
			date: timeEntry.date,
			hours: dateTimeFormatters.differenceInHours(timeEntry.from, timeEntry.to)
		};
		// Always return an array even when there's just a single element.
		if(typeof(date) === 'object'){
		    data = [data];
		}
		return $.ajax({
			type: 'POST',
			url: 'http://localhost:50363/TimeEntry',
			data: JSON.stringify(data),
			contentType: 'application/json; charset=utf-8'
		});
	}
};

module.exports = webApi;