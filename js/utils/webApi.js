'use strict';

var $ = require('jquery');

var webApi = {
	getCustomers: function(){
		return $.ajax({
			type: 'GET',
			url: 'http://localhost:9001/Customer',
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
			hours: 
		}

		console.log("POST");
		return $.ajax({
			type: 'POST',
			url: 'http://localhost:50363/TimeEntry',
			data: JSON.stringify(timeEntry),
			contentType: 'application/json; charset=utf-8'
		});
	}
};

module.exports = webApi;