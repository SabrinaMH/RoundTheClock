var app = app || {};

(function(){
    'use strict';

    app.CustomerSelector = React.createClass({
        render: function(){
            return (
                <form className="container">
                    <div className="row form-group">
                        <div className="col-md-15">
                            <select className="form-control" required></select>
                        </div>
                    </div>
                </form>
            );
        }
    });
})();
