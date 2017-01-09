import React from 'react';
import {render} from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import configureStore from './store/configureStore';

const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

import Root from './components/root/Root.jsx';

render(
        <Root store={store} history={history}/>,
        document.getElementById('react-root')
);