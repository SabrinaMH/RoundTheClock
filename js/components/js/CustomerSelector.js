'use strict';

var React = require('react');
var ReactPropTypes = React.PropTypes;
var customerStore = require('./../../stores/customerStore');

var CustomerSelector = React.createClass({displayName: "CustomerSelector",

    propTypes: {
        customers: ReactPropTypes.object.isRequired
    },

    render: function(){
        console.log("In render function of CustomerSelector. customers: " + customers);
        if (Object.keys(this.props.customers).length < 1){
            return null;
        }

        var customers = this.props.customers;
        var customersHtml = [];

        for (var key in customers){
            customersHtml.push(React.createElement("option", null, customers[key].name));
        }

        return (
            React.createElement("form", {className: "container"}, 
                React.createElement("div", {className: "row form-group"}, 
                    React.createElement("div", {className: "col-md-15"}, 
                        React.createElement("select", {className: "form-control", required: true}), 
                            customersHtml 
                    )
                )
            )
        );
    }
});

module.exports = CustomerSelector;
