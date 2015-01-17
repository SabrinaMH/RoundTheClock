var app = app || {};

(function () {
    'use strict';

    var CustomerSelector = app.CustomerSelector;
    var TimeEntryForm = app.TimeEntryForm;

    var App = React.createClass({displayName: "App",
        render: function(){
            return (
                React.createElement("div", null, 
                    React.createElement("header", {className: "headline"}, 
                        React.createElement("h1", null, "Round the Clock")
                    ), 
                    React.createElement("section", null, 
                        React.createElement(CustomerSelector, null)
                    ), 
                    React.createElement("section", null, 
                        React.createElement(TimeEntryForm, null)
                    )
                )
            );
        }
    });

    function render() {
        React.render(
            React.createElement(App, null),
            document.getElementById('app')
        );
    }

    render();
})();
