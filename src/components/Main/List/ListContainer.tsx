import React, {FC, useState} from 'react';
import List from "./List";
import {IConvertDate, IListContainerProps} from "./ListTypes";

const convertDate: IConvertDate = date => {
    const months = ["Jan.","Feb.","Mar.","Apr.","May","June","July","Aug.","Sept.","Oct.","Nov.","Dec."];
    return `${ new Date(date).getDate()} ${ months[new Date(date).getMonth()]}`
};

const ListContainer: FC<IListContainerProps> = props => {

    const [editModeIndex, setEditModeIndex] = useState<number | null>(null);

    const [activeRowIndex, setActiveRowIndex] = useState<number | null>(null);

    const leftPortionPageNumber: number = (props.pageNumber - 1) * props.pageSize;
    const rightPortionPageNumber: number = props.pageNumber * props.pageSize;

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
            filter={props.filter}
            convertDate={convertDate}
        />
    );
};

export default ListContainer;