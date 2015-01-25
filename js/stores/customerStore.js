'use strict';

var appDispatcher = require('../dispatcher/appDispatcher');
var eventEmitter = require('events').EventEmitter;
var constants = require('../constants/constants');
var assign = require('../../bower_components/object-assign/index'); 

var CHANGE_EVENT = 'change';

var _state = {};

function persistData(customers){
	_state = customers;
	console.log("customerStore received customers: " + customers);
}

var customerStore = assign({}, eventEmitter.prototype, {

	getState: function(){
		console.log("In customerStore method: getState");
		return _state;
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
	console.log("customerStore received action: " + action);
	switch(constants.actionType){
		case constants.GET_CUSTOMERS_SUCCESS:
			persistData(action.data);
			customerStore.emitChange();
			break;

		default: 
			break;
	}
});

module.exports = customerStore;