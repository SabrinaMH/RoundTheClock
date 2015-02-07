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

var TimeEntryForm = React.createClass({
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
                <form id="timeEntryForm" className="container" onChange={this.handleFormChanged}>
                    <div className="row form-group">
                        <div className="column">
                            <select name="project" className="form-control" onChange={this.handleProjectChanged} required>
                                { projectsHtml }
                            </select>
                        </div>
                        <div className="column">
                            <select name="task" className="form-control" required>
                                { tasksHtml }
                            </select>
                        </div>
                        <div className="column">
                            <div id="datePicker" className="input-group date">
                                <input name="date" className="form-control" placeholder="Date" type="text" required />
                                <span className="input-group-addon">
                                    <span className="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>
                        </div>
                        <div className="column">
                            <input name="to" className="form-control" placeholder="To" type="text" pattern="[0-9]{1,2}(:[0-9]{1,2})?" title="Format xx:xx" required />
                        </div>
                        <div className="column">
                            <input name="from" className="form-control" placeholder="From" type="text" pattern="[0-9]{1,2}(:[0-9]{1,2})?" title="Format xx:xx" required />
                        </div>
                    </div>
                    <div className="row form-group rightAligned">
                        <button className="btn" type="submit" onClick={this.save}>Save</button>
                    </div>
                </form>
                { errorHtml }
                { successHtml }
            </section>
        );
    }
});

module.exports = TimeEntryForm;
