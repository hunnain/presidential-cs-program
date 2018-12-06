import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import authReducer from './reducer/authreducer';
import registrationReducer from './reducer/registrationFromReducer';
import logger from 'redux-logger';

const RouteReducer = combineReducers({ authReducer, registrationFormReducer:registrationReducer })

function configureStore() {
    return createStore(RouteReducer, {}, applyMiddleware(thunk, logger));
}

const store = configureStore();
export default store;