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

var App = React.createClass({

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
                <section>
                    <TimeEntryForm projects={this.state.selectedCustomer.Projects} />
                </section>;
        }

        return (
            <div>
                <header className="headline">
                    <h1>Round the Clock</h1>
                </header>
                <section>
                    <CustomerSelector customers={this.state.customers} />
                </section>
                { timeEntryForm }
            </div>
        );
    }
});

module.exports = App;