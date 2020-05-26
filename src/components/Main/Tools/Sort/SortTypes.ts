import React from "react";

export interface IHandleMenuItemClick {
    (event: React.MouseEvent<HTMLElement>, index: number): void
}

export interface IHandleButtonClick {
    (event: React.MouseEvent<HTMLButtonElement>): void
}

export interface IHandleClose {
    (): void
}

export interface ISortContainerProps {
    sortBy: string
}

export interface ISortProps extends ISortContainerProps{
    anchorEl: null | HTMLElement
    handleMenuItemClick: IHandleMenuItemClick
    handleClose: IHandleClose
    handleButtonClick: IHandleButtonClick
    options: Array<string>
}