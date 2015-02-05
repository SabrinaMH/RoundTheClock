/*global $:false */

'use strict';

var React = require('react');
var appStore = require('./../../stores/appStore');
var timeEntryActions = require('./../../actions/timeEntryActions');

function getTaskState(){
    return {
        tasks: appStore.getTasks()
    };
}

var TimeEntryForm = React.createClass({displayName: "TimeEntryForm",
    getInitialState: function(){
        return getTaskState();
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

/*
    // Used to update the stores list of projects
    componentWillReceiveProps: function(newProps){
        timeEntryActions.projectsChanged(newProps.projects);
    },
*/

    _onChange: function(){
        this.setState(getTaskState());
    },

    handleProjectChanged: function(event){
        console.log("In handleProjectChanged");
        timeEntryActions.projectChanged(event.target.value);
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

        return (
            React.createElement("form", {id: "timeEntryForm", className: "container"}, 
                React.createElement("div", {className: "row form-group"}, 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("select", {className: "form-control", onChange: this.handleProjectChanged, required: true}, 
                            projectsHtml 
                        )
                    ), 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("select", {className: "form-control", required: true}, 
                            tasksHtml 
                        )
                    ), 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("div", {id: "datePicker", className: "input-group date"}, 
                            React.createElement("input", {className: "form-control", placeholder: "Date", type: "text", required: true}), 
                            React.createElement("span", {className: "input-group-addon"}, 
                                React.createElement("span", {className: "glyphicon glyphicon-calendar"})
                            )
                        )
                    ), 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("input", {className: "form-control", placeholder: "To", type: "text", required: true})
                    ), 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("input", {className: "form-control", placeholder: "From", type: "text", required: true})
                    )
                ), 
                React.createElement("div", {className: "row form-group rightAligned"}, 
                    React.createElement("button", {className: "btn", type: "submit"}, "Save")
                )
            )
        );
    }
});

module.exports = TimeEntryForm;
