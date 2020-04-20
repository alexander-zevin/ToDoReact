import React, {useEffect} from 'react';
import {Main} from "./Main";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {
    addTaskActionCreator,
    deleteTaskActionCreator,
    saveTaskActionCreator,
    setInputTextActionCreator,
    setPerformedActionCreator, setTasksActionCreator
} from "../../store/actions";
import {RootStateType} from "../../store/store";
import {getFromLocalStorage, setToLocalStorage} from "../../api/localStorageAPI";

export const MainContainer = () => {

    const dispatch = useDispatch();

    const {tasks, inputValue} = useSelector((state: RootStateType) => state.toDo, shallowEqual);

    useEffect(() => {
        const tasksLocalStorage = getFromLocalStorage();
        if (tasksLocalStorage !== null) dispatch(setTasksActionCreator(tasksLocalStorage));
    }, [dispatch]);

    useEffect(() => {
        setToLocalStorage(tasks);
    }, [tasks]);
    
    const setInputText = (newText: string) => {
        dispatch(setInputTextActionCreator(newText));
    };

    const addTask = (text: string) => {
        if (text !== '') {
            let k, newId;
            do {
                k = 0;
                newId = Math.floor(Math.random() * Math.floor(tasks.length + 1));
                for (let i = 0; i < tasks.length; i++) {
                    if (tasks[i].id === newId) k++
                }
            } while (k !== 0);
            dispatch(addTaskActionCreator(newId, text))
        }
    };

    const deleteTasks = (id: number) => {
        dispatch(deleteTaskActionCreator(id));
    };

    const setPerformed = (id: number) => {
        dispatch(setPerformedActionCreator(id))
    };

    const saveTask = (id: number, text: string) => {
        dispatch(saveTaskActionCreator(id, text))
    };

    return <Main
        setInputText={setInputText}
        inputValue={inputValue}
        addTask={addTask}
        tasks={tasks}
        deleteTasks={deleteTasks}
        setPerformed={setPerformed}
        saveTask={saveTask}
    />
};