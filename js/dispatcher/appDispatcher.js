'use strict';

var dispatcher = require('./Dispatcher');
var assign = require('../../bower_components/object-assign/index'); 

var appDispatcher = assign(new dispatcher(), {

});

module.exports = appDispatcher;
