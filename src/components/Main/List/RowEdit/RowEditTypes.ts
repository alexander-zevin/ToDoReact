import {Dispatch, SetStateAction} from "react";
import {IMessage} from "../../MainTypes";

export interface ISaveTask {
    (id: number, text: string): void
}

export interface IRowEditContainerProps {
    id: number
    text: string
    setEditModeIndex: Dispatch<SetStateAction<number | null>>
    setOpenMessage: Dispatch<SetStateAction<IMessage>>
}

export interface IRowEditProps extends IRowEditContainerProps{
    inputValue: string
    setInputValue: Dispatch<SetStateAction<string>>
    saveTask: ISaveTask
}