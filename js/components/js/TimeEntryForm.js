/*global $:false */

'use strict';

var React = require('react');
var timeEntryActions = require('./../../actions/timeEntryActions');
var timeEntryStore = require('./../../stores/timeEntryStore');

function getTaskState(){
    return {
        tasks: timeEntryStore.getTasks()
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
        timeEntryStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function(){
        timeEntryStore.removeChangeListener(this._onChange);
    },

    _onChange: function(){
        this.setState(getTaskState());
    },

    handleProjectChanged: function(event){
        timeEntryActions.projectChanged(event.target.value);
    },

    render: function(){
        console.log("this.props in TimeEntryForm:");
        console.dir(this.props);

        var projectsHtml = [];
        this.props.projects.forEach(function(project){
            projectsHtml.push(React.createElement("option", {key: project.Name}, project.Name));
        });

        var tasksHtml = [];
        this.state.tasks.forEach(function(task){
            tasksHtml.push(React.createElement("option", {key: task.Name}, task.Name));
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
