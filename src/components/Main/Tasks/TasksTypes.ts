import {ITask} from "../../../store/types";
import {IDeleteTasks, ISaveTask, ISetPerformed, IHandleSnackbarClick} from "../MainTypes";

export interface ITasksContainerProps {
    tasks: Array<ITask>,
    deleteTasks: IDeleteTasks,
    setPerformed: ISetPerformed,
    saveTask: ISaveTask
    openMessage: boolean
    handleSnackbarClick: IHandleSnackbarClick
}

export interface IHandleListItemClick {
    (index: number | null): void
}

/*export interface IHandleSnackbarClick {
    (open: boolean): void
}*/

export interface IHandleIconButtonClick extends IHandleListItemClick {}

export interface ITasksProps extends ITasksContainerProps{
    selectedIndex: number | null
    handleListItemClick: IHandleListItemClick
    editModeIndex: number | null
    handleIconButtonClick: IHandleIconButtonClick
}