import React, {useEffect, useState} from 'react';
import {IMessage, IPaginatorChange} from "./MainTypes";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import Main from "./Main";
import {getFromLocalStorage, setToLocalStorage} from "../../api/localStorageAPI";
import {setStateActionCreator} from "../../store/actions";
import {IState} from "../../store/types";

const MainContainer = () => {

    const dispatch = useDispatch();

    const state: IState = useSelector((state: RootStateType) => state.toDo, shallowEqual);

    useEffect(() => {
        const stateLocalStorage: IState = getFromLocalStorage();
        if (stateLocalStorage !== null) dispatch(setStateActionCreator(stateLocalStorage));
    }, [dispatch]);

    useEffect(() => {
        setToLocalStorage(state);
    }, [state]);

    const [openMessage, setOpenMessage] = useState<IMessage>({open: false, message: null});

    const pageSize: number = 11;
    const [pageNumber, setPageNumber] = useState<number>(1);
    const paginatorChange: IPaginatorChange = (event, value) => {
        setPageNumber(value);
    };

    return (
        <Main
            openMessage={openMessage}
            setOpenMessage={setOpenMessage}
            pageSize={pageSize}
            pageNumber={pageNumber}
            paginatorChange={paginatorChange}
            state={state}
        />
    );
};

export default MainContainer;