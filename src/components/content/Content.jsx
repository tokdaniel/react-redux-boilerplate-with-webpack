import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { REST } from 'helpers';
import { restTest } from 'actions';
import './Content.scss';

@connect(state => ({ sidebarVisible: state.sidebar }))
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
