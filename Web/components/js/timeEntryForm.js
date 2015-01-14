var app = app || {};

(function(){
    'use strict';

    app.TimeEntryForm = React.createClass({displayName: "TimeEntryForm",
        render: function(){
            return (
                React.createElement("form", {id: "timeEntryForm"}, 
                    React.createElement("div", {class: "column"}, 
                        React.createElement("label", {for: "project"}, "Project"), 
                        React.createElement("input", {name: "project", type: "text", value: ""})
                    ), 
                    React.createElement("div", {class: "column"}, 
                        React.createElement("label", {for: "task"}, "Task"), 
                        React.createElement("input", {name: "task", type: "text", value: ""})
                    ), 
                    React.createElement("div", {class: "column"}, 
                        React.createElement("label", {for: "date"}, "Date"), 
                        React.createElement("input", {name: "date", type: "text", value: ""})
                    ), 
                    React.createElement("div", {class: "column"}, 
                        React.createElement("label", {for: "to"}, "To"), 
                        React.createElement("input", {name: "to", type: "text", value: ""})
                    ), 
                    React.createElement("div", {class: "column"}, 
                        React.createElement("label", {for: "from"}, "From"), 
                        React.createElement("input", {name: "from", type: "text", value: ""})
                    ), 
                    React.createElement("button", {type: "submit"}, "Save")
                )
            );
        }
    });
})();
