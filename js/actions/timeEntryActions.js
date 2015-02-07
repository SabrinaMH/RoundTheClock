'use strict';

var appDispatcher = require('../dispatcher/appDispatcher');
var constants = require('../constants/constants');

var timeEntryActions = {
	projectChanged: function(projectName){
		appDispatcher.dispatch({
			actionType: constants.PROJECT_CHANGED,
			data: projectName
		});
	},

	projectsChanged: function(projects){
		appDispatcher.dispatch({
			actionType: constants.PROJECTS_CHANGED,
			data: projects
		});
	},

	formChanged: function(formChange){
		appDispatcher.dispatch({
			actionType: constants.FORM_CHANGED,
			data: formChange
		});
	},

	save: function(){
		appDispatcher.dispatch({
			actionType: constants.SAVE_TIME_ENTRY
		});
	}
};

module.exports = timeEntryActions;