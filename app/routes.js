import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/app/App.jsx';
import Example from './components/example/Example.jsx';

export default (
	<Route path="/" component={App}>
		<IndexRoute component={Example} />
	</Route>
);
