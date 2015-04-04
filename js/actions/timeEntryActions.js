'use strict';

var appDispatcher = require('../dispatcher/appDispatcher');
var constants = require('../constants/constants');

var timeEntryActions = {
	formChanged: function(formData){
		appDispatcher.dispatch({
			actionType: constants.FORM_CHANGED,
			data: formData
		});
	},

	save: function(){
		appDispatcher.dispatch({
			actionType: constants.SAVE_TIME_ENTRY
		});
	}
};

module.exports = timeEntryActions;