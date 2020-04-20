import {ADD_TASK, DELETE_TASK, SAVE_TASK, SET_INPUT_TEXT, SET_PERFORMED, SET_TASKS} from "./constants";
import {IState} from './types'
import {ActionType} from "./actions";

/*{id: 1, text: 'Text1', isPerformed: false},
{id: 2, text: 'Text2', isPerformed: false},
{id: 3, text: 'Text3', isPerformed: true},
{id: 4, text: 'Text4', isPerformed: false}*/

const initialState: IState = {
    tasks: [],
    inputValue: '',
};

export const reducer = (state = initialState, action: ActionType): IState => {
    switch (action.type) {
        case SET_INPUT_TEXT: {
            return {...state, inputValue: action.newText}
        }
        case ADD_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, {id: action.id, text: action.text, isPerformed: false}],
                inputValue: ''
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
        default: return state;
    }
};