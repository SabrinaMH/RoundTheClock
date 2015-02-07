/*global $:false */

'use strict';

var React = require('react');
var appStore = require('./../../stores/appStore');
var timeEntryActions = require('./../../actions/timeEntryActions');
var webApiActions = require('./../../actions/webApiActions');

function getState(){
    return {
        tasks: appStore.getTasks(),
        timeEntry: appStore.getTimeEntry(),
        error: appStore.getError(),
        success: appStore.getSuccess()
    };
}

var TimeEntryForm = React.createClass({displayName: "TimeEntryForm",
    getInitialState: function(){
        return getState();
    },

    componentDidMount: function(){
        $('#datePicker').datetimepicker({
            format: 'DD-MM-YYYY'
        });
        appStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){
        appStore.removeChangeListener(this._onChange);
    },

    _onChange: function(){
        this.setState(getState());
    },

    handleProjectChanged: function(event){
        timeEntryActions.projectChanged(event.target.value);
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

    save: function(){
        webApiActions.saveTimeEntry(getState().timeEntry);
    },

    render: function(){
        var projectsHtml = [];
        this.props.projects.forEach(function(project){
            projectsHtml.push(React.createElement("option", {value: project.Name, key: project.Name}, project.Name));
        });

        var tasksHtml = [];
        this.state.tasks.forEach(function(task){
            tasksHtml.push(React.createElement("option", {value: task.Name, key: task.Name}, task.Name));
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
                React.createElement("form", {id: "timeEntryForm", className: "container", onChange: this.handleFormChanged}, 
                    React.createElement("div", {className: "row form-group"}, 
                        React.createElement("div", {className: "column"}, 
                            React.createElement("select", {name: "project", className: "form-control", onChange: this.handleProjectChanged, required: true}, 
                                projectsHtml 
                            )
                        ), 
                        React.createElement("div", {className: "column"}, 
                            React.createElement("select", {name: "task", className: "form-control", required: true}, 
                                tasksHtml 
                            )
                        ), 
                        React.createElement("div", {className: "column"}, 
                            React.createElement("div", {id: "datePicker", className: "input-group date"}, 
                                React.createElement("input", {name: "date", className: "form-control", placeholder: "Date", type: "text", required: true}), 
                                React.createElement("span", {className: "input-group-addon"}, 
                                    React.createElement("span", {className: "glyphicon glyphicon-calendar"})
                                )
                            )
                        ), 
                        React.createElement("div", {className: "column"}, 
                            React.createElement("input", {name: "to", className: "form-control", placeholder: "To", type: "text", pattern: "[0-9]{1,2}(:[0-9]{1,2})?", title: "Format xx:xx", required: true})
                        ), 
                        React.createElement("div", {className: "column"}, 
                            React.createElement("input", {name: "from", className: "form-control", placeholder: "From", type: "text", pattern: "[0-9]{1,2}(:[0-9]{1,2})?", title: "Format xx:xx", required: true})
                        )
                    ), 
                    React.createElement("div", {className: "row form-group rightAligned"}, 
                        React.createElement("button", {className: "btn", type: "submit", onClick: this.save}, "Save")
                    )
                ), 
                errorHtml, 
                successHtml 
            )
        );
    }
});

module.exports = TimeEntryForm;
