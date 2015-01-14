var app = app || {};

(function(){
    'use strict';

    app.TimeEntryForm = React.createClass({
        render: function(){
            return (
                <form id="timeEntryForm">
                    <div class="column">
                        <label for="project">Project</label>
                        <input name="project" type="text" value="" />
                    </div>
                    <div class="column">
                        <label for="task">Task</label>
                        <input name="task" type="text" value="" />
                    </div>
                    <div class="column">
                        <label for="date">Date</label>
                        <input name="date" type="text" value="" />
                    </div>
                    <div class="column">
                        <label for="to">To</label>
                        <input name="to" type="text" value="" />
                    </div>
                    <div class="column">
                        <label for="from">From</label>
                        <input name="from" type="text" value="" />
                    </div>
                    <button type="submit">Save</button>
                </form>
            );
        }
    });
})();
