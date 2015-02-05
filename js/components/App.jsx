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

var App = React.createClass({

    getInitialState: function(){
        console.dir(appStore.getCustomers());
        return getState();
    },

    componentDidMount: function(){
        console.log("In componentDidMount in App.js");
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