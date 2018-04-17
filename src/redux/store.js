// import { createStore } from 'redux';
// import reducer from './reducers';
// const store = createStore(reducer);
// export default store;

import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import rootReducer from './Reducers/index';

const loggerMiddleware = createLogger();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    rootReducer, 
    composeEnhancers(
    applyMiddleware(thunkMiddleware, loggerMiddleware))
    );

export default store;
