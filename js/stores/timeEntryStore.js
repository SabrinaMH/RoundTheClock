'use strict';

var appDispatcher = require('../dispatcher/appDispatcher');
var eventEmitter = require('events').EventEmitter;
var constants = require('../constants/constants');
var assign = require('../../bower_components/object-assign/index'); 
var _ = require('underscore')._;

var CHANGE_EVENT = 'change';

var _projects = [], _selectedProject = null;
var _tasks = [], _selectedTask = null;


function setSelectedProject(projectName){
	_selectedProject = _.find(_projects, function(project){
		return project == projectName;
	});
	console.log("timeEntryStore selected project: ");
	console.dir(_selectedProject);
	setTasks(_selectedProject);
}

function setTasks(project){
	if (project.Tasks.length > 0){
		_tasks = project.Tasks;
		setSelectedTask(_tasks[0]);
	}
}

function setSelectedTask(task){
	_selectedTask = task;
}

var timeEntryStore = assign({}, eventEmitter.prototype, {
	getTasks: function(){
		return _tasks;
	},

	emitChange: function(){
		console.log("timeEntryStore emits change");
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
	console.log("timeEntryStore received action: ");
	console.dir(action);
	switch(action.actionType){
		case constants.PROJECT_CHANGED:
			console.log("Action PROJECT_CHANGED");
			setSelectedProject(action.data);
			break;
		default: 
			return; // Only emit change if action was recognized.
	}
	timeEntryStore.emitChange();
});

module.exports = timeEntryStore;