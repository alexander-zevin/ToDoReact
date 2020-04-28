import {Dispatch, SetStateAction} from "react";
import {IMessage} from "../../MainTypes";

export interface ISetPerformed {
    (id: number): void
}

export interface IDeleteTasks{
    (id: number): void
}

export interface ISetTag {
    (id: number): void
}

export interface IRowContainerProps {
    id: number
    text: string
    isPerformed: boolean
    editModeIndex: null | number
    setEditModeIndex: Dispatch<SetStateAction<number | null>>
    activeRowIndex: number | null
    setActiveRowIndex: Dispatch<SetStateAction<number | null>>
    setOpenMessage: Dispatch<SetStateAction<IMessage>>
    isTagged: boolean
}

export interface IRowProps extends IRowContainerProps{
    setPerformed: ISetPerformed
    deleteTasks: IDeleteTasks
    setTag: ISetTag
}