var app = app || {};

(function(){
    'use strict';
  $(function () {
    $('#datePicker').datetimepicker({
        pickTime: false
    });
});
    app.TimeEntryForm = React.createClass({displayName: "TimeEntryForm",

        // this code should probably be put inside componentDidMount or something like that
        //   $(function () {
        //		$('#datetimepicker5').datetimepicker({
        //			pickTime: false
        //		});
        //	});

        render: function(){
            return (
                React.createElement("form", {id: "timeEntryForm", className: "container"}, 
                    React.createElement("div", {className: "row form-group"}, 
                        React.createElement("div", {className: "column"}, 
                            React.createElement("input", {className: "form-control", placeholder: "Project", type: "text"})
                        ), 
                        React.createElement("div", {className: "column"}, 
                            React.createElement("input", {className: "form-control", placeholder: "Task", type: "text"})
                        ), 
                        React.createElement("div", {className: "column"}, 
                            React.createElement("div", {id: "datePicker"}, 
                                React.createElement("input", {className: "form-control", placeholder: "Date", type: "text", "data-date-format": "DD/MM/YYYY"}), 
                                React.createElement("span", {class: "input-group-addon"}, 
                                    React.createElement("span", {class: "glyphicon glyphicon-calendar"})
                                )
                            )
                        ), 
                        React.createElement("div", {className: "column"}, 
                            React.createElement("input", {className: "form-control", placeholder: "To", type: "text"})
                        ), 
                        React.createElement("div", {className: "column"}, 
                            React.createElement("input", {className: "form-control", placeholder: "From", type: "text"})
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
