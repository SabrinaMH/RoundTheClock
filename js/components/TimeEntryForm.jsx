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

var TimeEntryForm = React.createClass({
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
        timeEntryActions.projectChanged(event.target.value);
    },

    render: function(){
        var projectsHtml = [];
        this.props.projects.forEach(function(project){
            projectsHtml.push(<option value={project.Name} key={project.Name}>{project.Name}</option>);
        });

        var tasksHtml = [];
        this.state.tasks.forEach(function(task){
            tasksHtml.push(<option value={task.Name} key={task.Name}>{task.Name}</option>);
        });

        return (
            <form id="timeEntryForm" className="container">
                <div className="row form-group">
                    <div className="column">
                        <select className="form-control" onChange={this.handleProjectChanged} required>
                            { projectsHtml }
                        </select>
                    </div>
                    <div className="column">
                        <select className="form-control" required>
                            { tasksHtml }
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
