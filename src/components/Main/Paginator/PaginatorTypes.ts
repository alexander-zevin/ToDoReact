import {IPaginatorChange} from "../MainTypes";
import {ITask} from "../../../store/list/listTypes";

export interface IPaginatorProps {
    tasks: Array<ITask>
    paginatorChange: IPaginatorChange
    pageSize: number
}