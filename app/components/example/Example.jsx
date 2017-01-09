import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import exampleAction from '../../actions/';

import './Example.scss';

const Example = ({ data, onStuff }) => {
    let input;
    return (
        <div className="some-class-name">
            <h1>Example</h1>
            <input
                value={data}
                ref={node => {input = node;}}
                onChange={() => onStuff(input.value)} />
        </div>
    );
};

Example.propTypes = {
    data: PropTypes.string,
    onStuff: PropTypes.func
};

const mapStateToProps = state => {
    return {
        data: state.data
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onStuff: text => dispatch(exampleAction(text))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Example);
