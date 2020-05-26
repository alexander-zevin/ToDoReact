import {Dispatch, SetStateAction} from "react";
import {IMessage} from "../../MainTypes";
import {ISetActiveRow} from "../ListTypes";

export interface IStylesProps {
    textDecoration: string
}

export interface ISetPerformed {
    (id: number): void
}

export interface IDeleteTasks extends ISetPerformed{}

export interface ISetTag extends ISetPerformed{}

export interface IRowContainerProps {
    id: number
    text: string
    isPerformed: boolean
    editModeIndex: null | number
    setEditModeIndex: Dispatch<SetStateAction<number | null>>
    activeRowIndex: number | null
    setActiveRow: ISetActiveRow
    setOpenMessage: Dispatch<SetStateAction<IMessage>>
    isTagged: boolean
    date: string
}

export interface IRowProps extends IRowContainerProps{
    setPerformed: ISetPerformed
    deleteTasks: IDeleteTasks
    setTag: ISetTag
}