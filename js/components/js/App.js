'use strict';

var React = require('react');
var CustomerSelector = require('./CustomerSelector');
var TimeEntryForm = require('./TimeEntryForm');
var customerStore = require('./../../stores/customerStore');
var webApiActions = require('./../../actions/webApiActions');

function getCustomerState(){
    return {
        customers: customerStore.getState()
    };
}

var App = React.createClass({displayName: "App",

    getInitialState: function(){
        console.log("Return value from customerStore.getState(): " + customerStore.getState());
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
        return (
            React.createElement("div", null, 
                React.createElement("header", {className: "headline"}, 
                    React.createElement("h1", null, "Round the Clock")
                ), 
                React.createElement("section", null, 
                    React.createElement(CustomerSelector, {
                        customers: this.state.customers}
                    )
                ), 
                "//", React.createElement("section", null, 
                "//    ", React.createElement(TimeEntryForm, null), 
                "//")
            )
        );
    }
});

module.exports = App;