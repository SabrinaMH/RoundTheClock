var $ = require('jquery');
jQuery = $; // needed for jquery-ui
require('jquery-ui');
var moment = require('moment');
var React = require('react');

var dateChanged = null;

var DatePicker = React.createClass({displayName: "DatePicker",
    componentDidMount: function () {
        dateChanged = this.props.onChange;
        var $datePicker = $('#date');
        $datePicker.datepicker({
            onSelect: function(date){
                dateChanged(date);      
            }
        });
        var today = new Date();
        $datePicker.datepicker('setDate', today);
    },   
    render: function() {
        return (
            React.createElement("input", {type: "text", placeholder: "Date", id: "date"})
        );
    }
});
 
module.exports = DatePicker;
