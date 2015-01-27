'use strict';

var appDispatcher = require('../dispatcher/appDispatcher');
var constants = require('../constants/constants');

var customerActions = {
	customerSelected: function(customer){
		appDispatcher.dispatch({
			actionType: constants.CUSTOMER_SELECTED,
			data: customer
		});
	}
};

module.exports = customerActions;