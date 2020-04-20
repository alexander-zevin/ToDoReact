import {IHandleInputBaseChange} from "../TaskTypes";
import {ISaveTask} from "../../../MainTypes";
import {ITask} from "../../../../../store/types";
import {IHandleIconButtonClick} from "../../TasksTypes";

export interface ITaskInputProps {
    inputTaskText: string
    handleInputBaseChange: IHandleInputBaseChange
    saveTask: ISaveTask
    item: ITask
    handleIconButtonClick: IHandleIconButtonClick
}