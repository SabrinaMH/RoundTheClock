var React = require('react');

var TimeEntryForm = React.createClass({

// need this TODO SMH
//$('#datetimepicker1').datetimepicker();
//
//
           //// $(function () {
           ////     $('#datetimepicker3').datetimepicker({
           //        // format: 'DD-MM-YYYY';
           //     });
           // });


    render: function(){
        return (
            <form id="timeEntryForm" className="container">
                <div className="row form-group">
                    <div className="column">
                        <select className="form-control" required>
                            <option value="" default>Project</option>
                            <option>test</option>
                            <option>dsdas</option>
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
