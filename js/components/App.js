var React = require('react');
var CustomerSelector = require('./CustomerSelector');
var TimeEntryForm = require('./TimeEntryForm');

// Needed for Chrome DevTools
window.React = React;

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

