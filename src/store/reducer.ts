import {ADD_TASK, DELETE_TASK, SAVE_TASK, SET_PERFORMED, SET_TASKS} from "./constants";
import {IState} from './types'
import {ActionType} from "./actions";

const initialState: IState = {
    tasks: [
        /*{id: 1, text: 'Съездить за продуктами', isPerformed: false},
        {id: 2, text: 'Искупать собаку', isPerformed: false},
        {id: 3, text: 'Помыть полы', isPerformed: false},
        {id: 4, text: 'Посмотреть сериал \"Мир дикого запада\"', isPerformed: true},
        {id: 5, text: 'Вынести мусор', isPerformed: false},
        {id: 6, text: 'Помочь другу с работой', isPerformed: false},
        {id: 7, text: 'Tex3', isPerformed: false},
        {id: 8, text: 'Tex4', isPerformed: false},
        {id: 9, text: 'Text5', isPerformed: false},
        {id: 10, text: 'Text6', isPerformed: false},
        {id: 11, text: 'Text7', isPerformed: false},
        {id: 12, text: 'Text8', isPerformed: false},
        {id: 13, text: 'Text9', isPerformed: false},
        {id: 14, text: 'Text10', isPerformed: false},
        {id: 15, text: 'Text11', isPerformed: false},
        {id: 16, text: 'Text12', isPerformed: false}*/
    ]
};

export const reducer = (state = initialState, action: ActionType): IState => {
    switch (action.type) {
        case ADD_TASK: {
            return {
                ...state,
                tasks: [...state.tasks, {id: action.id, text: action.text, isPerformed: false}]
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