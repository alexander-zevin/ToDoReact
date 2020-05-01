import React, {FC, useState} from 'react';
import List from "./List";
import {IListContainerProps} from "./ListTypes";

const ListContainer: FC<IListContainerProps> = props => {

    const [editModeIndex, setEditModeIndex] = useState<number | null>(null);

    const [activeRowIndex, setActiveRowIndex] = useState<number | null>(null);

    const leftPortionPageNumber = (props.pageNumber - 1) * props.pageSize;
    const rightPortionPageNumber = props.pageNumber * props.pageSize;

    const convertDate = (date: string) => {
        const months = ["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."];
        return `${ new Date(date).getDate()} ${ months[new Date(date).getMonth()]}`
    };

    let filterTasks = [];
    switch (props.sortBy) {
        case 'not performed': filterTasks = props.tasks.filter(item => !item.isPerformed);
            break;
        case 'tags': filterTasks = props.tasks.filter(item => item.isTagged);
            break;
        default: filterTasks = props.tasks
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
            sortBy={props.sortBy}
            convertDate={convertDate}
        />
    );
};

export default ListContainer;