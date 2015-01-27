'use strict';

var appDispatcher = require('../dispatcher/appDispatcher');
var eventEmitter = require('events').EventEmitter;
var constants = require('../constants/constants');
var assign = require('../../bower_components/object-assign/index'); 

var CHANGE_EVENT = 'change';

var _customers = {}, _selected = null;

function persistData(customers){
	_customers = customers;
	console.log("customerStore received customers: ");
	console.dir(customers);
}

function setSelected(customer){
	_selected = customer;
	console.log("customerStore selected customer: ");
	console.dir(customer);
}

var customerStore = assign({}, eventEmitter.prototype, {

	getCustomers: function(){
		console.log("In customerStore method: getCustomers");
		return _customers;
	},

	getSelected: function(){
		console.log("In customerStore method: getSelected");
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
			persistData(action.data);
			break;
		case constants.CUSTOMER_SELECTED:
			console.log("Action CUSTOMER_SELECTED");
			setSelected(action.data);
			break;
		default: 
			return; // Only emit change if action was recognized.
	}
	customerStore.emitChange();
});

module.exports = customerStore;