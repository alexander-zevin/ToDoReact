import React, {FC, useState} from 'react';
import Add from "./Add";
import {useDispatch} from "react-redux";
import {IAddContainerProps, IAddTasks, ITextFieldChange} from "./AddTypes";
import {addTaskActionCreator} from "../../../store/list/listActions";

const AddContainer: FC<IAddContainerProps> = ({tasks}) => {

    const dispatch = useDispatch();

    const [textFieldValue, setTextFieldValue] = useState<string>('');

    const textFieldChange: ITextFieldChange = value => {
        setTextFieldValue(value)
    };

    const addTask: IAddTasks = text => {
        if (text !== '') {
            const newDate: string = new Date().toISOString();
            let matches: number;
            let newId: number;
            do {
                matches = 0;
                newId = Math.floor(Math.random() * Math.floor(tasks.length + 1));
                for (let i: number = 0; i < tasks.length; i++) {
                    if (tasks[i].id === newId) matches++
                }
            } while (matches !== 0);
            dispatch(addTaskActionCreator(newId, text, newDate));
            textFieldChange('');
        }
    };

    return (
        <Add
            textFieldValue={textFieldValue}
            textFieldChange={textFieldChange}
            addTask={addTask}
        />
    )
};

export default AddContainer;