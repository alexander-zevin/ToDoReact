import {IPaginatorChange} from "../MainTypes";
import {ITask} from "../../../store/list/types";

export interface IPaginatorProps {
    tasks: Array<ITask>
    paginatorChange: IPaginatorChange
    pageSize: number
}