'use strict';

var $ = require('jquery');

var webApi = {
	getCustomers: function(){
		return $.ajax({
			type: 'GET',
			url: 'http://localhost:9001/Customer',
			dataType: 'json'
		});
	}
};

module.exports = webApi;