import {IListState} from "../../store/list/types";
import React, {Dispatch, SetStateAction} from "react";

export interface IMessage {
    open: boolean
    message: null | string
}

export interface IPaginatorChange {
    (event: React.ChangeEvent<unknown>, value: number): void
}

export interface IMainProps {
    openMessage: IMessage
    setOpenMessage: Dispatch<SetStateAction<IMessage>>
    pageSize: number
    pageNumber: number
    paginatorChange: IPaginatorChange
    listState: IListState
    initialized: boolean
}