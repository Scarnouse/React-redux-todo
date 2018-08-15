import { combineReducers, createStore } from 'redux';

import initialState from './initial-state';
import Todo from './reducers/todo';
import Done from './reducers/done';

export default createStore(combineReducers({
    Todo,
    Done
}), initialState);