'use strict';

var appDispatcher = require('../dispatcher/appDispatcher');
var constants = require('../constants/constants');

var timeEntryActions = {
	projectChanged: function(projectName){
		appDispatcher.dispatch({
			actionType: constants.PROJECT_CHANGED,
			data: projectName
		});
	}
};

module.exports = timeEntryActions;