var app = app || {};

(function(){
    'use strict';
  $(function () {
    $('#datePicker').datetimepicker({
        pickTime: false
    });
});
    app.TimeEntryForm = React.createClass({
        render: function(){
            return (
                <form id="timeEntryForm" className="container">
                    <div className="row form-group">
                        <div className="column">
                            <select className="selectpicker show-tick" title='Project'>
                                <option>test</option>
                                <option>dsdas</option>
                            </select>
                        </div>
                        <div className="column">
                            <input className="form-control" placeholder="Task" type="text" />
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
                            <input className="form-control" placeholder="To" type="time" required />
                        </div>
                        <div className="column">
                            <input className="form-control" placeholder="From" type="time" required />
                        </div>
                    </div>
                    <div className="row form-group rightAligned">
                        <button className="btn" type="submit">Save</button>
                    </div>
                </form>
            );
        }
    });
})();
