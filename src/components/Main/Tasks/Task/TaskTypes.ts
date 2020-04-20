import {ITask} from "../../../../store/types";
import {IDeleteTasks, ISaveTask, ISetPerformed} from "../../MainTypes";
import {IHandleListItemClick} from "../TasksTypes";

export interface ITaskProps {
    item: ITask
    deleteTasks: IDeleteTasks
    setPerformed: ISetPerformed
    key: number
    handleListItemClick: IHandleListItemClick
    selectedIndex: number | null
    saveTask: ISaveTask
    handleIconButtonClick: IHandleListItemClick
    editModeIndex: number | null
}

export interface IHandleInputBaseChange {
    (value: string): void
}