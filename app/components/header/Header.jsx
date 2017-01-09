import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';
import ThreeLineMenu from './threeLineMenu/ThreeLineMenu.jsx';
import actions from '../../actions/';

import './Header.scss';

class Header extends Component {

    static propTypes = {
        state: PropTypes.object,
        dispatch: PropTypes.func
    };

    constructor(props){

        super(props);
        this.state = {
            sidebarVisible: props.sidebarVisible,
            className: ''
        };
    }

    handleClick() {

        this.setState({
            sidebarVisible: !this.state.sidebarVisible,
            className: this.state.sidebarVisible ? '' : 'sidebar-visible'
        });

        this.props.dispatch(actions.toggleSidebar(!this.state.sidebarVisible));
    }

    render() {
        return (
            <header className={this.state.className}>
                <div onClick={() => this.handleClick()}>
                    <ThreeLineMenu className={this.state.className}/>
                </div>
            </header>
        );
    }
}


const mapStateToProps = state => {
    return {
        state: {sidebarVisible: state.sidebarVisible}
    };
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);