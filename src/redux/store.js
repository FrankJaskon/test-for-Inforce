import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import thunkMiddleWare from 'redux-thunk';
import productData from './product-data-reducer';

const reducers = combineReducers({
    productData: productData
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, composeEnhancers(compose(applyMiddleware(thunkMiddleWare))));