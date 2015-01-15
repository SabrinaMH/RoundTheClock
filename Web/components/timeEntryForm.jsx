var app = app || {};

(function(){
    'use strict';
  $(function () {
    $('#datePicker').datetimepicker({
        pickTime: false
    });
});
    app.TimeEntryForm = React.createClass({

        // this code should probably be put inside componentDidMount or something like that
        //   $(function () {
        //		$('#datetimepicker5').datetimepicker({
        //			pickTime: false
        //		});
        //	});

        render: function(){
            return (
                <form id="timeEntryForm" className="container">
                    <div className="row form-group">
                        <div className="column">
                            <input className="form-control" placeholder="Project" type="text" />
                        </div>
                        <div className="column">
                            <input className="form-control" placeholder="Task" type="text" />
                        </div>
                        <div className="column">
                            <div id="datePicker">
                                <input className="form-control" placeholder="Date" type="text" data-date-format="DD/MM/YYYY" />
                                <span class="input-group-addon">
                                    <span class="glyphicon glyphicon-calendar"></span>
                                </span>
                            </div>
                        </div>
                        <div className="column">
                            <input className="form-control" placeholder="To" type="text" />
                        </div>
                        <div className="column">
                            <input className="form-control" placeholder="From" type="text" />
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
