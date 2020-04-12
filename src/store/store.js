import {createStore, combineReducers} from 'redux';
import {toDoReducer} from "./toDoReducer";

const reducers = combineReducers({
    toDo: toDoReducer
});

export const store = createStore(reducers);