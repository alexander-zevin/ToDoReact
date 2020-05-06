import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
import {listReducer} from "./list/listReducer";
import {appReducer} from "./app/appReducer";

const rootReducer = combineReducers({
    list: listReducer,
    app: appReducer
});

export type RootStateType = ReturnType<typeof rootReducer> //ReturnType cоздаёт тип, состоящий из возвращаемого типа функции RootReducer

export const store = createStore(rootReducer, applyMiddleware(thunk));