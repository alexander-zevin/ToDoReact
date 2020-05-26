import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {
    IHandleButtonClick,
    IHandleClose,
    IHandleMenuItemClick,
    ISortContainerProps
} from "./SortTypes";
import {Sort} from "./Sort";
import {setSortActionCreator} from "../../../../store/list/actions";

const options: Array<string> = [
    'date',
    'not performed',
    'tags',
];

export const SortContainer: FC<ISortContainerProps> = ({sortBy}) => {

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleButtonClick: IHandleButtonClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick: IHandleMenuItemClick = (event, index) => {
        setAnchorEl(null);
        dispatch(setSortActionCreator(options[index]));
    };

    const handleClose: IHandleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Sort
            sortBy={sortBy}
            anchorEl={anchorEl}
            handleButtonClick={handleButtonClick}
            handleMenuItemClick={handleMenuItemClick}
            handleClose={handleClose}
            options={options}
        />
    )
};