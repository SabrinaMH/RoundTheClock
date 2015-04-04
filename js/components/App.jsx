'use strict';

var React = require('react');
var TimeEntryForm = require('./TimeEntryForm');

var App = React.createClass({
    render: function(){
        return (
            <div>
                <header className="headline">
                    <h1>Round the Clock</h1>
                </header>
                <TimeEntryForm />
            </div>
        );
    }
});

module.exports = App;