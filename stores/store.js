import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';

// const middlewares = [thunk];

// if (__DEV__) {
//   const createDebugger = require('redux-flipper').default;
//   middlewares.push(createDebugger());
// }

// const store = createStore(rootReducer, applyMiddleware(...middlewares));
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
