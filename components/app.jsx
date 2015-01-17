var app = app || {};

(function () {
    'use strict';

    var CustomerSelector = app.CustomerSelector;
    var TimeEntryForm = app.TimeEntryForm;

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
})();
