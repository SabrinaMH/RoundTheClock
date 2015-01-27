/*global $:false */

'use strict';

var React = require('react');

var TimeEntryForm = React.createClass({displayName: "TimeEntryForm",

    componentDidMount: function(){
        $('#datePicker').datetimepicker({
            format: 'DD-MM-YYYY'
        });
    },

    render: function(){
        console.log("this.props in TimeEntryForm:");
        console.dir(this.props);
        
        var projects = this.props.selectedCustomer.Projects;
        if (!projects || Object.keys(projects).length < 1){
            return null;
        }

        var projectsHtml = [];
        projects.forEach(function(project){
            projectsHtml.push(React.createElement("option", {key: "{project.Name}"}, project.Name));
        });

        return (
            React.createElement("form", {id: "timeEntryForm", className: "container"}, 
                React.createElement("div", {className: "row form-group"}, 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("select", {className: "form-control", required: true}, 
                            React.createElement("option", {value: "", default: true}, "Project"), 
                            projectsHtml 
                        )
                    ), 
                    React.createElement("div", {className: "column"}, 
                        React.createElement("select", {className: "form-control"}, 
                            React.createElement("option", {value: "", default: true}, "Task")
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
