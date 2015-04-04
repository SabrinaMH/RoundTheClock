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

var TimeEntryForm = React.createClass({
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
            customersHtml.push(<option value={customer.Name} key={customer.Name}>{customer.Name}</option>);
        });

        var projectsHtml = [];
        this.state.projects.forEach(function(project){
            projectsHtml.push(<option value={project.Name} key={project.Name}>{project.Name}</option>);
        });

        var tasksHtml = [];
        this.state.tasks.forEach(function(task){
            tasksHtml.push(<option value={task.Name} key={task.Name}>{task.Name}</option>);
        });

        var errorHtml = null;
        if (this.state.error){
            errorHtml = <p>{this.state.error}</p>;
        }

        var successHtml = null;
        if (this.state.success){
            successHtml = <p>{this.state.success}</p>;
        }


        return (
            <section>
                <form id="time-entry-form" name="testing" onChange={this.handleFormChanged}>
                    <select name="customer" required>
                        { customersHtml }
                    </select>
                    <select name="project" required>
                        { projectsHtml }
                    </select>
                    <select name="task" required>
                        { tasksHtml }
                    </select>
                    <DatePicker key="datePicker" onChange={this.dateChanged} />
                    <input name="from" placeholder="From" type="text" pattern="[0-9]{1,2}(:[0-9]{1,2})?" title="Format xx:xx" required />
                    <input name="to" placeholder="To" type="text" pattern="[0-9]{1,2}(:[0-9]{1,2})?" title="Format xx:xx" required />
                    <button type="submit" onClick={this.save}>Save</button>
                </form>
                { errorHtml }
                { successHtml }
            </section>
        );
    }
});

module.exports = TimeEntryForm;
