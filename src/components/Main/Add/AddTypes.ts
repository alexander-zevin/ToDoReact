import {ITask} from "../../../store/types";

export interface ITextFieldChange {
    (value: string): void
}

export interface IAddTasks{
    (text: string): void
}

export interface IAddContainerProps {
    tasks: Array<ITask>
}

export interface IAddProps{
    textFieldValue: string
    textFieldChange: ITextFieldChange
    addTask: IAddTasks
}