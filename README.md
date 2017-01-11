# react-redux-webpack-boilerplate
Now this repo is much more than just a simple playaround with react, redux and webpack. The first priority was, to achieve the most convenient way to connect your components to the redux-store using classes. The syntax is really declarative and readable this way, sparing a lot of boilerplate code.

##Contains:
* very basic landing page, displaying the workflow with redux-logger
* example components, and how to connect them to redux-store
* supporting static class properties
* supporting class and function decorators
* supporting async-await
* ES6 - 7 Support with Babel
* font-awesome included in the package
* routing with react-router wired into store
* supporting sass, import your sass file in your component
* importing images and fonts as data-urls so you don't need to worry about them
* a basic tool for REST with fetch-api

##Example Component:

```js
import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {REST} from 'helpers';
import {restTest} from 'actions';
import './Content.scss';

@connect(state => ({sidebarVisible: state.sidebar}))
export default class Content extends Component {

    static propTypes = {
        state: PropTypes.object,
    };

    constructor(props) {
        super(props);
        this.state = {
            sidebarVisible: props.sidebarVisible,
            className: ''
        };
    }

    componentWillReceiveProps(props) {

        REST.get('/').then((response) => this.props.dispatch(restTest(response)));

        this.setState({
            sidebarVisible: !this.state.sidebarVisible,
            className: this.state.sidebarVisible ? '' : 'sidebar-visible'
        });
    }

    render() {
        return (
            <main className={this.state.className}>
                {this.props.children}
            </main>
        );
    }
}
```

Note that `connect` from `react-redux` is used here as a decorator. The function itself takes 2 params namely `mapStateToProps` and `mapDispatchToProps`. The first is defined as an inline arrow function, the second is omitted, since `connect` applies `dispatch` as a component property by default(use: this.props.dispatch). 

##Webpack aliases

0. components
1. helpers
2. actions
3. config

You can import your stuff anywhere with ```import {Item1, Item2, Item3} from "alias-name"```. For this to work you need to register your item in the appropriate folder's `index.js` file.

## Run the app

0. ```npm install```
1. ```npm start```

This will install the dependecies and start a webpack-devserver at http://localhost:8080.

## Build the app
```npm run build```

This will build the app into the "dist" directory in the root of the project.
