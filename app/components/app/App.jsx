import React, {Component, PropTypes} from 'react';
import './App.scss';

//fix components
import Header from '../header/Header.jsx';
import Sidebar from '../slideOut/SlideOut.jsx';
import Content from '../content/Content.jsx'

export default class App extends Component {

    static propTypes = {
        children: PropTypes.object
    }

    render() {
        return (
            <div className="container">
                <Header />
                <Sidebar />
                <Content children={this.props.children} />
            </div>
        );
    }
}
