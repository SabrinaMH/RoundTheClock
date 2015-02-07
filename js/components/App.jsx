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
            timeEntryForm = <TimeEntryForm projects={this.state.selectedCustomer.Projects} />;
        }

        return (
            <div>
                <header className="headline">
                    <h1>Round the Clock</h1>
                </header>
                <CustomerSelector customers={this.state.customers} />
                { timeEntryForm }
            </div>
        );
    }
});

module.exports = App;