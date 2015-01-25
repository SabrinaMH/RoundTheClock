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

var App = React.createClass({

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
            <div>
                <header className="headline">
                    <h1>Round the Clock</h1>
                </header>
                <section>
                    <CustomerSelector 
                        customers={this.state.customers} 
                    />
                </section>
                //<section>
                //    <TimeEntryForm />
                //</section>
            </div>
        );
    }
});

module.exports = App;