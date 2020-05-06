import React, {FC} from 'react';
import {useDispatch} from "react-redux";
import {IControlContainerProps, IHandleButtonClick, IHandleClose, IHandleMenuItemClick} from "./ControlTypes";
import Control from "./Control";
import {setFilterActionCreator} from "../../../store/list/listActions";

const options: Array<string> = [
    'all',
    'not performed',
    'tags',
];

const ControlContainer: FC<IControlContainerProps> = props => {

    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

    const handleButtonClick: IHandleButtonClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick: IHandleMenuItemClick = (event, index) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        dispatch(setFilterActionCreator(options[index]));
    };

    const handleClose: IHandleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Control
            filter={props.filter}
            anchorEl={anchorEl}
            selectedIndex={selectedIndex}
            handleButtonClick={handleButtonClick}
            handleMenuItemClick={handleMenuItemClick}
            handleClose={handleClose}
            options={options}
        />
    )
};

export default ControlContainer;