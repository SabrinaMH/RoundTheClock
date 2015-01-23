var React = require('react');
var CustomerSelector = require('./CustomerSelector');
var TimeEntryForm = require('./TimeEntryForm');

// Needed for Chrome DevTools
window.React = React;

var App = React.createClass({
    render: function(){
        return (
            <div>
                <header className="headline">
                    <h1>Round the Clock</h1>
                </header>
                <section>
                    <CustomerSelector />
                </section>
                <section>
                    <TimeEntryForm />
                </section>
            </div>
        );
    }
});

function render() {
    React.render(
        <App />,
        document.getElementById('app')
    );
}

render();

