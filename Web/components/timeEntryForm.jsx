var app = app || {};

(function(){
    'use strict';

    app.TimeEntryForm = React.createClass({
        render: function(){
            return (
                <form>
                    <div style="float:left">
                        <label for="project">Project</label>
                        <input name="project" type="text" value="" />
                    </div>
                    <div style="float:left">
                        <label for="task">Project</label>
                        <input name="task" type="text" value="" />
                    </div>
                    <div style="float:left">
                        <label for="date">Project</label>
                        <input name="date" type="text" value="" />
                    </div>
                    <div style="float:left">
                        <label for="to">Project</label>
                        <input name="to" type="text" value="" />
                    </div>
                    <div style="float:left">
                        <label for="from">Project</label>
                        <input name="from" type="text" value="" />
                    </div>
                    <button type="submit">Save</button>
                </form>
            );
        }
    });
})();
