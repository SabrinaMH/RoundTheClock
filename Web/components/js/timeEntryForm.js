var app = app || {};

(function(){
    'use strict';
  $(function () {
    $('#datePicker').datetimepicker({
        pickTime: false
    });
});
    app.TimeEntryForm = React.createClass({displayName: "TimeEntryForm",
        render: function(){
            return (
                React.createElement("form", {id: "timeEntryForm", className: "container"}, 
                    React.createElement("div", {className: "row form-group"}, 
                        React.createElement("div", {className: "column"}, 
                            React.createElement("select", {className: "selectpicker show-tick", title: "Project"}, 
                                React.createElement("option", null, "test"), 
                                React.createElement("option", null, "dsdas")
                            )
                        ), 
                        React.createElement("div", {className: "column"}, 
                            React.createElement("input", {className: "form-control", placeholder: "Task", type: "text"})
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
                            React.createElement("input", {className: "form-control", placeholder: "To", type: "time", required: true})
                        ), 
                        React.createElement("div", {className: "column"}, 
                            React.createElement("input", {className: "form-control", placeholder: "From", type: "time", required: true})
                        )
                    ), 
                    React.createElement("div", {className: "row form-group rightAligned"}, 
                        React.createElement("button", {className: "btn", type: "submit"}, "Save")
                    )
                )
            );
        }
    });
})();
