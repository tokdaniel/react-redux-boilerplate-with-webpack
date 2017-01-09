import React, {Component, PropTypes} from 'react';
import { connect } from 'react-redux';

import './Content.scss';

class Content extends Component {

    static propTypes = {
        state: PropTypes.object,
    };

    constructor(props){
        super(props);
        this.state = {
            sidebarVisible: props.sidebarVisible,
            className: ''
        };
    }

    componentWillReceiveProps(props){

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


const mapStateToProps = state => {
    return {
        state: { sidebarVisible: state.sidebarVisible }
    }
};

export default connect(
    mapStateToProps,
)(Content);