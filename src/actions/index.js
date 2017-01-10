import * as types from './types';

export default {
    exampleAction: () => {
        return {
            type: types.EXAMPLE,
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
