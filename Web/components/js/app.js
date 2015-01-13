(function () {
    'use strict';
    
    var App = React.createClass({displayName: "App",
        getInitialState: function(){
            return {};
        },
        
        render: function(){
            return (
                React.createElement("div", null, 
                    React.createElement("header", {id: "header"}, 
                        React.createElement("h1", null, "Round the Clock")
                    )
                )
            );
        }
    });
    
    function render() {
        React.render(
            React.createElement(App, null),
            document.getElementById('app')
        )
    }
    
    render();
})();