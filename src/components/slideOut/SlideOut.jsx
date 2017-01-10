import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import './SlideOut.scss';


export default class Sidebar extends Component {

    render() {
        return (
            <nav>
                <ul>
                    <li>LOGIN / SIGN-UP</li>
                </ul>
            </nav>
        );
    }
}
