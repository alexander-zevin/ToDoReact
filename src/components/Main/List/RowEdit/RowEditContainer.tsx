import React, {FC, useState} from 'react';
import {IRowEditContainerProps, ISaveTask} from "./RowEditTypes";
import {RowEdit} from "./RowEdit";
import {useDispatch} from "react-redux";
import {saveTaskActionCreator} from "../../../../store/list/actions";

export const RowEditContainer: FC<IRowEditContainerProps> = props => {

    const dispatch = useDispatch();

    const [inputValue, setInputValue] = useState<string>(props.text);

    const saveTask: ISaveTask = (id, text) => {
        dispatch(saveTaskActionCreator(id, text));
        props.setEditModeIndex(null);
        props.setActiveRow(null);
        props.setOpenMessage({open: true, message: 'Saving was successful!'});
    };

    return (
        <RowEdit
            inputValue={inputValue}
            setInputValue={setInputValue}
            saveTask={saveTask}
            {...props}
        />
    );
};