import {ITask} from "../../../store/list/types";

export interface ITextFieldChange {
    (value: string): void
}

export interface IAddTasks extends ITextFieldChange{}

export interface IAddContainerProps {
    tasks: Array<ITask>
}

export interface IAddProps{
    textFieldValue: string
    textFieldChange: ITextFieldChange
    addTask: IAddTasks
}