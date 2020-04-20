import {createStore, combineReducers} from 'redux';
import {reducer} from "./reducer";

const rootReducer = combineReducers({
    toDo: reducer
});

export type RootStateType = ReturnType<typeof rootReducer> //ReturnType cоздаёт тип, состоящий из возвращаемого типа функции RootReducer

export const store = createStore(rootReducer);