import {createSelector} from "reselect";
import {RootStateType} from "./store";

const filterSelector = createSelector(
    (state: RootStateType) => state.toDo,
    toDo => {
        switch (toDo.filter) {
            case 'not performed': return {...toDo, tasks: toDo.tasks.filter(item => !item.isPerformed)};
            case 'tags': return {...toDo, tasks: toDo.tasks.filter(item => item.isTagged)};
            default: return toDo
        }
    }
);

export default filterSelector;