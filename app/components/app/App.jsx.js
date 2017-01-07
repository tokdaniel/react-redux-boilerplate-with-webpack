import React, { PropTypes } from 'react';

import './App.scss';

const App = ({ children }) =>
    <div className="app-container">
        { children }
    </div>;

App.propTypes = {
    children: PropTypes.object
};

export default App;
