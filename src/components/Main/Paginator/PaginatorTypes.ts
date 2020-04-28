import {ITask} from "../../../store/types";
import React from "react";
import {IPaginatorChange} from "../MainTypes";

export interface IPaginatorProps {
    tasks: Array<ITask>
    paginatorChange: IPaginatorChange
    pageSize: number
}