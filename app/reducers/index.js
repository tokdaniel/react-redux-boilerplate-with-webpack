import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import * as types from '../actions/types';

const sidebar = (state = false, action) => {
    switch (action.type) {
        case types.TOGGLE_SIDEBAR:
            return action.isVisible;
        default:
            return state;
    }
}

const rest = (state = {}, action) => {
    switch (action.type) {
        case 'REST':
            return action.data;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    sidebar,
    rest,
    routing
});

export default rootReducer;
