'use strict';

var React = require('react');
var CustomerSelector = require('./CustomerSelector');
var TimeEntryForm = require('./TimeEntryForm');
var customerStore = require('./../../stores/customerStore');
var webApiActions = require('./../../actions/webApiActions');

function getCustomerState(){
    return {
        customers: customerStore.getCustomers(),
        selectedCustomer: customerStore.getSelected()
    };
}

var App = React.createClass({displayName: "App",

    getInitialState: function(){
        console.log("Return value from customerStore.getCustomers(): ");
        console.dir(customerStore.getCustomers());
        return getCustomerState();
    },

    componentDidMount: function(){
        console.log("In componentDidMount in App.js");
        customerStore.addChangeListener(this._onChange);
        webApiActions.getCustomers();
    },

    componentWillUnmount: function(){
        customerStore.removeChangeListener(this._onChange);
    },

    _onChange: function(){
        this.setState(getCustomerState());
    },

    render: function(){
        console.log("in App.js render function. selectedCustomer:");
        console.dir(this.state.selectedCustomer);
        var timeEntryForm = null;
        if (this.state.selectedCustomer && this.state.selectedCustomer.Projects){
            timeEntryForm =                 
                React.createElement("section", null, 
                    React.createElement(TimeEntryForm, {projects: this.state.selectedCustomer.Projects})
                );
        }

        return (
            React.createElement("div", null, 
                React.createElement("header", {className: "headline"}, 
                    React.createElement("h1", null, "Round the Clock")
                ), 
                React.createElement("section", null, 
                    React.createElement(CustomerSelector, {customers: this.state.customers})
                ), 
                timeEntryForm 
            )
        );
    }
});

module.exports = App;