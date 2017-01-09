import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import actions from '../../../actions/';
import './ThreeLineMenu.scss';


export default class ThreeLineMenu extends Component {

    static propTypes() {
        return {
            className: PropTypes.string
        }
    };

    render() {
        return (
            <div className="three-line-menu">
                <span className={this.props.className}></span>
                <div></div>
            </div>
        );
    }
}
