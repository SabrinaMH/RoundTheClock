'use strict';

var React = require('react');
var ReactPropTypes = React.PropTypes;
var customerStore = require('./../../stores/customerStore');

var CustomerSelector = React.createClass({

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
            customersHtml.push(<option>{customers[key].name}</option>);
        }

        return (
            <form className="container">
                <div className="row form-group">
                    <div className="col-md-15">
                        <select className="form-control" required></select>
                            { customersHtml }
                    </div>
                </div>
            </form>
        );
    }
});

module.exports = CustomerSelector;
