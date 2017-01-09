import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';

const sidebarVisible = (state = false, action) => {
    switch (action.type){
        case types.TOGGLE_SIDEBAR:
            return action.isVisible;
        default:
            return state;
    }
}

const rootReducer = combineReducers({
    sidebarVisible,
    routing
});

export default rootReducer;
