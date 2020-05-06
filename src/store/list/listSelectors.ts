import {createSelector} from "reselect";
import {RootStateType} from "../store";

const filterSelector = createSelector(
    (state: RootStateType) => state.list,
    list => {
        switch (list.filter) {
            case 'not performed': return {...list, tasks: list.tasks.filter(item => !item.isPerformed)};
            case 'tags': return {...list, tasks: list.tasks.filter(item => item.isTagged)};
            default: return list
        }
    }
);

export default filterSelector;