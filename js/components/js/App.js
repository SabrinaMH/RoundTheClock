'use strict';

var React = require('react');
var TimeEntryForm = require('./TimeEntryForm');

var App = React.createClass({displayName: "App",
    render: function(){
        return (
            React.createElement("div", null, 
                React.createElement("header", {className: "headline"}, 
                    React.createElement("h1", null, "Round the Clock")
                ), 
                React.createElement(TimeEntryForm, null)
            )
        );
    }
});

module.exports = App;