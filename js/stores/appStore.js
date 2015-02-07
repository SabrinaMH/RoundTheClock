'use strict';

var appDispatcher = require('../dispatcher/appDispatcher');
var eventEmitter = require('events').EventEmitter;
var constants = require('../constants/constants');
var assign = require('../../bower_components/object-assign/index'); 
var _ = require('underscore')._;

var CHANGE_EVENT = 'change';

var _customers = [], _selectedCustomer = null;
var _projects = [], _selectedProject = null;
var _tasks = [], _selectedTask = null;

function setCustomers(customers){
	_customers = customers;
	if (_customers.length > 0){
		setSelectedCustomer(_customers[0].Name);
	}
}

function setSelectedCustomer(customerName){
	_selectedCustomer = _.find(_customers, function(customer){
		return customer.Name == customerName;
	});
	setProjects(_selectedCustomer.Projects);
}

function setProjects(projects){
	_projects = projects;
	if (_projects.length > 0){
		setSelectedProject(_projects[0].Name);
	}
}

function setSelectedProject(projectName){
	_selectedProject = _.find(_projects, function(project){
		return project.Name == projectName;
	});
	setTasks(_selectedProject.Tasks);
}

function setTasks(tasks){
	_tasks = tasks;
	if (_tasks.length > 0){
		setSelectedTask(_tasks[0]);
	}
}

function setSelectedTask(task){
	_selectedTask = task;
}


var appStore = assign({}, eventEmitter.prototype, {

	getCustomers: function(){
		return _customers;
	},

	getSelectedCustomer: function(){
		return _selectedCustomer;
	},

	getTasks: function(){
		return _tasks;
	},

	emitChange: function(){
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
	switch(action.actionType){
		case constants.GET_CUSTOMERS_SUCCESS:
			setCustomers(action.data);
			break;
		case constants.CUSTOMER_CHANGED:
			setSelectedCustomer(action.data);
			break;
		case constants.PROJECT_CHANGED:
			setSelectedProject(action.data);
			break;
		case constants.PROJECTS_CHANGED:
			setProjects(action.data);
			break;
		default: 
			return; // Only emit change if action was recognized.
	}
	appStore.emitChange();
});

module.exports = appStore;