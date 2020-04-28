import React, {useEffect, useState} from 'react';
import {IMessage, IPaginatorChange} from "./MainTypes";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import Main from "./Main";
import {getFromLocalStorage, setToLocalStorage} from "../../api/localStorageAPI";
import {setTasksActionCreator} from "../../store/actions";

const MainContainer = () => {

    const dispatch = useDispatch();

    const {tasks} = useSelector((state: RootStateType) => state.toDo, shallowEqual);

    useEffect(() => {
        const tasksLocalStorage = getFromLocalStorage();
        if (tasksLocalStorage !== null) dispatch(setTasksActionCreator(tasksLocalStorage));
    }, [dispatch]);

    useEffect(() => {
        setToLocalStorage(tasks);
    }, [tasks]);

    const [openMessage, setOpenMessage] = useState<IMessage>({open: false, message: null});

    const pageSize = 11;
    const [pageNumber, setPageNumber] = useState(1);
    const paginatorChange: IPaginatorChange = (event, value) => {
        setPageNumber(value);
    };

    return (
        <Main
            tasks={tasks}
            openMessage={openMessage}
            setOpenMessage={setOpenMessage}
            pageSize={pageSize}
            pageNumber={pageNumber}
            paginatorChange={paginatorChange}
        />
    );
};

export default MainContainer;