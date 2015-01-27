/*global $:false */

'use strict';

var React = require('react');

var TimeEntryForm = React.createClass({

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
            projectsHtml.push(<option key="{project.Name}">{project.Name}</option>);
        });

        return (
            <form id="timeEntryForm" className="container">
                <div className="row form-group">
                    <div className="column">
                        <select className="form-control" required>
                            <option value="" default>Project</option>
                            { projectsHtml }
                        </select>
                    </div>
                    <div className="column">
                        <select className="form-control">
                            <option value="" default>Task</option>
                        </select>
                    </div>
                    <div className="column">
                        <div id="datePicker" className="input-group date">
                            <input className="form-control" placeholder="Date" type="text" required />
                            <span className="input-group-addon">
                                <span className="glyphicon glyphicon-calendar"></span>
                            </span>
                        </div>
                    </div>
                    <div className="column">
                        <input className="form-control" placeholder="To" type="text" required />
                    </div>
                    <div className="column">
                        <input className="form-control" placeholder="From" type="text" required />
                    </div>
                </div>
                <div className="row form-group rightAligned">
                    <button className="btn" type="submit">Save</button>
                </div>
            </form>
        );
    }
});

module.exports = TimeEntryForm;
