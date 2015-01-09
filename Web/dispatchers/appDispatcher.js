var appDispatcher = new flux.Dispatcher();
appDispatcher.dispatch('initialize', {
	foo: 'bar'
}); 

	appDispatcher.register('initialize', function(options){
		React.renderComponent(<AppView />, document.body)
	})
