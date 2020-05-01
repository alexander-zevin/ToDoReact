import {Dispatch, SetStateAction} from "react";

export interface IViewContentProps {
    text: string
    setActiveRowIndex: Dispatch<SetStateAction<number | null>>
}