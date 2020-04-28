import React, {FC, useState} from 'react';
import List from "./List";
import {IListContainerProps} from "./ListTypes";

const ListContainer: FC<IListContainerProps> = props => {

    const [editModeIndex, setEditModeIndex] = useState<number | null>(null);

    const [activeRowIndex, setActiveRowIndex] = useState<number | null>(null);

    const leftPortionPageNumber = (props.pageNumber - 1) * props.pageSize;
    const rightPortionPageNumber = props.pageNumber * props.pageSize;

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
        />
    );
};

export default ListContainer;