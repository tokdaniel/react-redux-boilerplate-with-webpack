import React, { Component, PropTypes } from 'react';
import './App.scss';

//import used components
import { Header, SlideOut, Content } from 'components';

export default class App extends Component {

    static propTypes = {
        children: PropTypes.object
    }

    render() {
        return (
            <div className="container">
                <Header />
                <SlideOut />
                <Content children={this.props.children}/>
            </div>
        );
    }
}
