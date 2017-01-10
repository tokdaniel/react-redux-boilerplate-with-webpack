import * as types from './types';

export default {
    restTest: (data) => {
        return {
            type: types.REST_TEST,
            data
        };
    },
    toggleSidebar: (isVisible) => {
        return {
            type: types.TOGGLE_SIDEBAR,
            isVisible
        };
    }
}
