import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {reducer as listReducer} from "./list/reducer";
import {reducer as appReducer} from "./app/reducer";

const middlewares = [thunk]

const rootReducer = combineReducers({
    list: listReducer,
    app: appReducer
});

export type RootStateType = ReturnType<typeof rootReducer> //ReturnType cоздаёт тип, состоящий из возвращаемого типа функции RootReducer

export const store = createStore(rootReducer, applyMiddleware(...middlewares));