import {ADD_TASK, DELETE_TASK, SAVE_TASK, SET_PERFORMED, SET_TAG, SET_TASKS} from "./constants";
import {IState} from './types'
import {ActionType} from "./actions";

const initialState: IState = {
    tasks: []
};

export const reducer = (state = initialState, action: ActionType): IState => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, {id: action.id, text: action.text, isPerformed: false, isTagged: false, date: action.date}]
            }
        }
        case DELETE_TASK: {
            return {
                ...state,
                tasks: state.tasks.filter(i => i.id !== action.id)
            }
        }
        case SET_PERFORMED: {
            return {
                ...state,
                tasks: state.tasks.map(i => {
                    if (i.id === action.id) {
                        return {...i, isPerformed: !i.isPerformed}
                    } else {
                        return {...i}
                    }
                })
            }
        }
        case SAVE_TASK: {
            return {
                ...state,
                tasks: state.tasks.map(i =>
                    i.id === action.id
                        ? {...i, text: action.text}
                        : {...i}
                )
            }
        }
        case SET_TASKS: {
            return {
                ...state, tasks: action.tasks
            }
        }
        case SET_TAG: {
            return {
                ...state, tasks: state.tasks.map(i =>
                    i.id === action.id
                        ? {...i, isTagged: !i.isTagged}
                        : {...i}
                )
            }
        }
        default: return state;
    }
};