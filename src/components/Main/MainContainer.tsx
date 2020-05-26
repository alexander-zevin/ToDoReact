import React, {useEffect, useState} from 'react';
import {IMessage, IPaginatorChange} from "./MainTypes";
import {useDispatch, useSelector} from "react-redux";
import {Main} from "./Main";
import {apiLocalStorage} from "../../api/apiLocalStorage";
import {IListState} from "../../store/list/types";
import {getStateThunkCreator} from "../../store/list/thunks";
import {RootStateType} from "../../store/store";

export const MainContainer = () => {

    const dispatch = useDispatch();

    const listState: IListState = useSelector((state: RootStateType): IListState => state.list);

    const initialized: boolean = useSelector((state: RootStateType): boolean => state.app.initialized);

    useEffect(() => {
        dispatch(getStateThunkCreator())
    }, []);

    useEffect(() => {
        apiLocalStorage.setState(listState);
    }, [listState]);

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
            listState={listState}
            initialized={initialized}
        />
    );
};