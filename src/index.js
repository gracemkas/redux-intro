import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

const firstReducer = (state = 0, action) => {
    if (action.type === 'BUTTON_ONE'){
        state ++
    } else if (action.type === 'BUTTON_TWO'){
        state --
    }
    return state;
}

const secondReducer = (state = 0, action) => {
    if (action.type === 'BUTTON_TWO'){
        state --
    } 
    return state;
}

const elementList = (state = [], action) => {
    if (action.type === 'ADD_ELEMENT'){
        console.log('action', action.payload);
        return [...state, action.payload]
        
    } else if (action.type === 'CLEAR_ELEMENT_LIST'){
        state = []
    } 
    return state;
}


//This creates our store object
//Can only take in one reducer
const storeInstance = createStore(
    //This is a reducer
    combineReducers({
        firstReducer,
        secondReducer,
        elementList
    }),
    applyMiddleware(logger)
)

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
