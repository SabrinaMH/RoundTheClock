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

var TimeEntryForm = React.createClass({

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
            projectsHtml.push(<option key={project.Name}>{project.Name}</option>);
        });

        var tasksHtml = [];
        this.state.tasks.forEach(function(task){
            tasksHtml.push(<option key={task.Name}>{task.Name}</option>);
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
