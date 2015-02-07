'use strict';

var React = require('react');
var customerActions = require('./../../actions/customerActions');

var CustomerSelector = React.createClass({
    handleCustomerChanged: function(event){
        customerActions.customerChanged(event.target.value);
    },

    render: function(){
        var customers = this.props.customers;
        if (Object.keys(customers).length < 1){
            return null;
        }

        var customersHtml = [];
        customers.forEach(function(customer) {
            customersHtml.push(<option value={customer.Name} key={customer.Name}>{customer.Name}</option>);
        });

        return (
            <section>
                <form className="container">
                    <div className="row form-group">
                        <div className="col-md-15">
                            <select className="form-control" name="select-customer" onChange={this.handleCustomerChanged} required>
                                { customersHtml }
                            </select>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
});

module.exports = CustomerSelector;
