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

    if (props.sortBy === 'added') {
        props.tasks.sort((a, b) => {
                if (new Date(a.date) > new Date(b.date)) return 1;
                if (new Date(a.date) < new Date(b.date)) return -1;
                return 0
        })
    } else if (props.sortBy === 'not performed') {
        props.tasks.sort((a, b) => {
                if (a.isPerformed > b.isPerformed) return 1;
                if (a.isPerformed < b.isPerformed) return -1;
                return 0
        });
    } else if (props.sortBy === 'tags') {
        props.tasks.sort((a, b) => {
                if (a.isTagged < b.isTagged) return 1;
                if (a.isTagged > b.isTagged) return -1;
                return 0
        })
    }

    return (
        <List
            tasks={props.tasks}
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