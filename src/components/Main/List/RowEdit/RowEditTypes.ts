import {Dispatch, SetStateAction} from "react";
import {IMessage} from "../../MainTypes";
import {ISetActiveRow} from "../ListTypes";

export interface ISaveTask {
    (id: number, text: string): void
}

export interface IRowEditContainerProps {
    id: number
    text: string
    setEditModeIndex: Dispatch<SetStateAction<number | null>>
    setOpenMessage: Dispatch<SetStateAction<IMessage>>
    setActiveRow: ISetActiveRow
}

export interface IRowEditProps extends IRowEditContainerProps{
    inputValue: string
    setInputValue: Dispatch<SetStateAction<string>>
    saveTask: ISaveTask
}