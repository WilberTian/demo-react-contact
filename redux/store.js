import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import contactApp from './reducers'

var finalCreateStore = compose(
    applyMiddleware(thunk)
)(createStore);

var configureStore = function(initialState) {
    initialState = initialState || {todos: []}
    return finalCreateStore(contactApp, initialState);
};

export default configureStore;