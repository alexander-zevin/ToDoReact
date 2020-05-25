import React, {FC, useState} from 'react';
import List from "./List";
import {IConvertDate, IListContainerProps} from "./ListTypes";
import {ITask} from "../../../store/list/listTypes";

const convertDate: IConvertDate = date => {
    const months = ["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."];
    return `${ new Date(date).getDate()} ${ months[new Date(date).getMonth()]}`
};

const ListContainer: FC<IListContainerProps> = props => {

    const [editModeIndex, setEditModeIndex] = useState<number | null>(null);

    const [activeRowIndex, setActiveRowIndex] = useState<number | null>(null);

    const leftPortionPageNumber: number = (props.pageNumber - 1) * props.pageSize;
    const rightPortionPageNumber: number = props.pageNumber * props.pageSize;

    let filterTasks = [];
    switch (props.filter) {
        case 'not performed': filterTasks = props.tasks.filter(item => !item.isPerformed); break;
        case 'tags': filterTasks = props.tasks.filter(item => item.isTagged); break;
        default: filterTasks = props.tasks
    }

    switch (props.sortBy) {
        case 'not performed': filterTasks.sort(
            (a, b) => {
                if (a.isPerformed > b.isPerformed) return 1
                if (a.isPerformed < b.isPerformed) return -1
                return 0
            }
        ); break;
        case 'tags': filterTasks.sort(
            (a, b) => {
                if (a.isTagged < b.isTagged) return 1
                if (a.isTagged > b.isTagged) return -1
                return 0
            }
        ); break;
        case 'date': filterTasks.sort(
            (a, b) => {
                if (a.date > b.date) return 1
                if (a.date < b.date) return -1
                return 0
            }
        )
    }

    return (
        <List
            tasks={filterTasks}
            editModeIndex={editModeIndex}
            setEditModeIndex={setEditModeIndex}
            activeRowIndex={activeRowIndex}
            setActiveRowIndex={setActiveRowIndex}
            setOpenMessage={props.setOpenMessage}
            pageNumber={props.pageNumber}
            pageSize={props.pageSize}
            leftPortionPageNumber={leftPortionPageNumber}
            rightPortionPageNumber={rightPortionPageNumber}
            filter={props.filter}
            sortBy={props.sortBy}
            convertDate={convertDate}
            initialized={props.initialized}
        />
    );
};

export default ListContainer;