import {IMessage} from "../MainTypes";
import {Dispatch, SetStateAction} from "react";

export interface IMessageProps {
    openMessage: IMessage
    setOpenMessage: Dispatch<SetStateAction<IMessage>>
}