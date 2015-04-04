'use strict';

var moment = require('moment');

var dateTimeFormatters = {
	differenceInHours: function(firstTimestamp, lastTimestamp){
		var milliseconds = moment(lastTimestamp, "HH:mm").diff(moment(firstTimestamp, "HH:mm"));
		return moment.duration(milliseconds).asHours(); // yields decimal value
	},

	// perhaps useful at some point
	timeAsDecimal: function(time){
		var hoursMinutes = time.split(/[.:]/);
		var hours = parseInt(hoursMinutes[0], 10);
		var minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
		return hours + minutes / 60;
	}
};

module.exports = dateTimeFormatters;