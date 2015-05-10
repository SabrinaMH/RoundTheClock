/*global $:false */

'use strict';

var React = require('react');
var appStore = require('./../../stores/appStore');
var timeEntryActions = require('./../../actions/timeEntryActions');
var webApiActions = require('./../../actions/webApiActions');
var DatePicker = require('./DatePicker');

function getState(){
    return {
        customers: appStore.getCustomers(),
        projects: appStore.getProjects(),
        tasks: appStore.getTasks(),
        timeEntry: appStore.getTimeEntry(),
        error: appStore.getError(),
        success: appStore.getSuccess()
    };
} 

var TimeEntryForm = React.createClass({displayName: "TimeEntryForm",
    getInitialState: function(){
        webApiActions.getCustomers();
        return getState();
    },

    componentDidMount: function(){
        appStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){
        appStore.removeChangeListener(this._onChange);
    },

    _onChange: function(){
        this.setState(getState());
    },

    handleFormChanged: function(event){
        console.log("form changed");
        console.dir(event.target.name);
        console.dir(event.target.value);
        timeEntryActions.formChanged({
            field: event.target.name,
            value: event.target.value
        });
    },

    dateChanged: function(date){
        timeEntryActions.formChanged({
            field: 'date',
            value: date
        });
    },

    save: function(){
        webApiActions.saveTimeEntry(getState().timeEntry);
    },

    render: function(){
        var customers = this.state.customers;
        if (customers === null || Object.keys(customers).length < 1){
            return null;
        }

        var customersHtml = [];
        customers.forEach(function(customer) {
            customersHtml.push(React.createElement("option", {value: customer.name, key: customer.name}, customer.name));
        });

        var projectsHtml = [];
        this.state.projects.forEach(function(project){
            projectsHtml.push(React.createElement("option", {value: project.name, key: project.name}, project.name));
        });

        var tasksHtml = [];
        this.state.tasks.forEach(function(task){
            tasksHtml.push(React.createElement("option", {value: task.name, key: task.name}, task.name));
        });

        var errorHtml = null;
        if (this.state.error){
            errorHtml = React.createElement("p", null, this.state.error);
        }

        var successHtml = null;
        if (this.state.success){
            successHtml = React.createElement("p", null, this.state.success);
        }


        return (
            React.createElement("section", null, 
                React.createElement("form", {id: "time-entry-form", name: "testing", onChange: this.handleFormChanged}, 
                    React.createElement("select", {name: "customer", required: true}, 
                         customersHtml 
                    ), 
                    React.createElement("select", {name: "project", required: true}, 
                         projectsHtml 
                    ), 
                    React.createElement("select", {name: "task", required: true}, 
                         tasksHtml 
                    ), 
                    React.createElement(DatePicker, {key: "datePicker", onChange: this.dateChanged}), 
                    React.createElement("input", {name: "from", placeholder: "From", type: "text", pattern: "[0-9]{1,2}(:[0-9]{1,2})?", title: "Format xx:xx", required: true}), 
                    React.createElement("input", {name: "to", placeholder: "To", type: "text", pattern: "[0-9]{1,2}(:[0-9]{1,2})?", title: "Format xx:xx", required: true}), 
                    React.createElement("button", {type: "submit", onClick: this.save}, "Save")
                ), 
                 errorHtml, 
                 successHtml 
            )
        );
    }
});

module.exports = TimeEntryForm;
