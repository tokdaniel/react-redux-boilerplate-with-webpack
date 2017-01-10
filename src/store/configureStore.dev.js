import { applyMiddleware,createStore } from 'redux';
import createLogger from 'redux-logger';
import rootReducer from '../reducers/index';

const logger = createLogger();

export default function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(logger)
    );
    return store;
}
