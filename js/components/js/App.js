'use strict';

var React = require('react');
var CustomerSelector = require('./CustomerSelector');
var TimeEntryForm = require('./TimeEntryForm');
var appStore = require('./../../stores/appStore');
var webApiActions = require('./../../actions/webApiActions');

function getState(){
    return {
        customers: appStore.getCustomers(),
        selectedCustomer: appStore.getSelectedCustomer()
    };
}

var App = React.createClass({displayName: "App",

    getInitialState: function(){
        return getState();
    },

    componentDidMount: function(){
        appStore.addChangeListener(this._onChange);
        webApiActions.getCustomers();
    },

    componentWillUnmount: function(){
        appStore.removeChangeListener(this._onChange);
    },

    _onChange: function(){
        this.setState(getState());
    },

    render: function(){
        var timeEntryForm = null;
        if (this.state.selectedCustomer && this.state.selectedCustomer.Projects){
            timeEntryForm = React.createElement(TimeEntryForm, {projects: this.state.selectedCustomer.Projects});
        }

        return (
            React.createElement("div", null, 
                React.createElement("header", {className: "headline"}, 
                    React.createElement("h1", null, "Round the Clock")
                ), 
                React.createElement(CustomerSelector, {customers: this.state.customers}), 
                timeEntryForm 
            )
        );
    }
});

module.exports = App;