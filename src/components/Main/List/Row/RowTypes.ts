import {Dispatch, SetStateAction} from "react";
import {IMessage} from "../../MainTypes";

export interface IRowMouseMove {
    (isActive: boolean): void
}

export interface ISetPerformed {
    (id: number): void
}

export interface IDeleteTasks{
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
}

export interface IRowProps extends IRowContainerProps{
    setPerformed: ISetPerformed
    deleteTasks: IDeleteTasks
}