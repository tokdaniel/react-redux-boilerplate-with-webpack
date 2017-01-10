import * as types from './types';

export const restTest = (data) => {
    return {
        type: types.REST_TEST,
        data
    };
};

export const toggleSidebar = (isVisible) => {
    return {
        type: types.TOGGLE_SIDEBAR,
        isVisible
    };
}
