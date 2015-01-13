var app = app || {};

(function(){
    'use strict';

    app.TimeEntryForm = React.createClass({displayName: "TimeEntryForm",
        render: function(){
            return (
                React.createElement("form", null, 
                    React.createElement("div", {style: "float:left"}, 
                        React.createElement("label", {for: "project"}, "Project"), 
                        React.createElement("input", {name: "project", type: "text", value: ""})
                    ), 
                    React.createElement("div", {style: "float:left"}, 
                        React.createElement("label", {for: "task"}, "Project"), 
                        React.createElement("input", {name: "task", type: "text", value: ""})
                    ), 
                    React.createElement("div", {style: "float:left"}, 
                        React.createElement("label", {for: "date"}, "Project"), 
                        React.createElement("input", {name: "date", type: "text", value: ""})
                    ), 
                    React.createElement("div", {style: "float:left"}, 
                        React.createElement("label", {for: "to"}, "Project"), 
                        React.createElement("input", {name: "to", type: "text", value: ""})
                    ), 
                    React.createElement("div", {style: "float:left"}, 
                        React.createElement("label", {for: "from"}, "Project"), 
                        React.createElement("input", {name: "from", type: "text", value: ""})
                    ), 
                    React.createElement("button", {type: "submit"}, "Save")
                )
            );
        }
    });
})();
