var React = require('react');
var App = require('./components/js/App');

// Needed for React tab in Chrome DevTools
window.React = React;

React.render(
	React.createElement(App, null),
	document.getElementById('app')
);