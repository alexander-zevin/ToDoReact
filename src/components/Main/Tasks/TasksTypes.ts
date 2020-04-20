import {ITask} from "../../../store/types";
import {IDeleteTasks, ISaveTask, ISetPerformed} from "../MainTypes";

export interface ITasksContainerProps {
    tasks: Array<ITask>,
    deleteTasks: IDeleteTasks,
    setPerformed: ISetPerformed,
    saveTask: ISaveTask
}

export interface IHandleListItemClick {
    (index: number | null): void
}

export interface ITasksProps extends ITasksContainerProps{
    selectedIndex: number | null
    handleListItemClick: IHandleListItemClick
    editModeIndex: number | null
    handleIconButtonClick: IHandleIconButtonClick
}

export interface IHandleIconButtonClick extends IHandleListItemClick {}