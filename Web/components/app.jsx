var app = app || {};

(function () {
    'use strict';

    var TimeEntryForm = app.TimeEntryForm;

    var App = React.createClass({
        render: function(){
            return (
                <div>
                    <header>
                        <h1>Round the Clock</h1>
                    </header>
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
})();
