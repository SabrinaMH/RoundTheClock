'use strict';

var React = require('react');
var customerActions = require('./../../actions/customerActions');

var CustomerSelector = React.createClass({displayName: "CustomerSelector",
    handleCustomerChanged: function(event){
        console.log("EVENT:");
        console.dir(event);
        console.dir(event.target.value);
        customerActions.customerChanged(event.target.value);
    },

    render: function(){
        console.log("In render function of CustomerSelector");
        console.dir(this.props.customers);

        var customers = this.props.customers;
        if (Object.keys(customers).length < 1){
            return null;
        }

        var customersHtml = [];
        customers.forEach(function(customer) {
            customersHtml.push(React.createElement("option", {value: customer.Name, key: customer.Name}, customer.Name));
        });

        return (
            React.createElement("form", {className: "container"}, 
                React.createElement("div", {className: "row form-group"}, 
                    React.createElement("div", {className: "col-md-15"}, 
                        React.createElement("select", {className: "form-control", name: "select-customer", onChange: this.handleCustomerChanged, required: true}, 
                            customersHtml 
                        )
                    )
                )
            )
        );
    }
});

module.exports = CustomerSelector;
