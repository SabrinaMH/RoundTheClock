'use strict';

var appDispatcher = require('../dispatcher/appDispatcher');
var eventEmitter = require('events').EventEmitter;
var constants = require('../constants/constants');
var assign = require('../../bower_components/object-assign/index'); 
var _ = require('underscore')._;

var CHANGE_EVENT = 'change';

var _customers = [], _selected = null;

function setCustomers(customers){
	_customers = customers;
	if (_customers.length > 0){
		setSelected(_customers[0].Name);
	}
	console.log("customerStore received customers: ");
	console.dir(customers);
}

function setSelected(customerName){
	_selected = _.find(_customers, function(customer){
		return customer.Name == customerName;
	});
	console.log("customerStore selected customer: ");
	console.dir(_selected);
}

var customerStore = assign({}, eventEmitter.prototype, {

	getCustomers: function(){
		console.log("In customerStore method: getCustomers. Customers:");
		console.dir(_customers);
		return _customers;
	},

	getSelected: function(){
		console.log("In customerStore method: getSelected. Selected:");
		console.dir(_selected);
		return _selected;
	},

	emitChange: function(){
		console.log("customerStore emits change");
		this.emit(CHANGE_EVENT);
	},

	addChangeListener: function(callback){
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback){
		this.removeListener(CHANGE_EVENT, callback);
	}
});

appDispatcher.register(function(action){
	console.log("customerStore received action: ");
	console.dir(action);
	switch(action.actionType){
		case constants.GET_CUSTOMERS_SUCCESS:
			console.log("Action GET_CUSTOMERS_SUCCESS");
			setCustomers(action.data);
			break;
		case constants.CUSTOMER_CHANGED:
			console.log("Action CUSTOMER_CHANGED");
			setSelected(action.data);
			break;
		default: 
			return; // Only emit change if action was recognized.
	}
	customerStore.emitChange();
});

module.exports = customerStore;