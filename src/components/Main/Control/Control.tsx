import React, {FC} from 'react';
import {Box} from "@material-ui/core";
import SortIcon from '@material-ui/icons/Sort';
import MenuItem from "@material-ui/core/MenuItem";
import styles from './Control.module.css'
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import Typography from "@material-ui/core/Typography";
import {useDispatch} from "react-redux";
import {setFilterActionCreator} from "../../../store/actions";
import {IControlProps} from "./ControlTypes";
import FilterListIcon from '@material-ui/icons/FilterList';

const Control: FC<IControlProps> = props => {

    const dispatch = useDispatch();

    const options = [
        'all',
        'not performed',
        'tags',
    ];

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const [selectedIndex, setSelectedIndex] = React.useState<number>(0);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (event: React.MouseEvent<HTMLElement>, index: number) => {
        setSelectedIndex(index);
        setAnchorEl(null);
        dispatch(setFilterActionCreator(options[index]));

    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box>
            <Box className={styles.sortBy}>
                <Button onClick={handleClick} startIcon={<SortIcon/>}>
                    <Typography variant="body2">
                        Filter by: {props.filter}
                    </Typography>
                </Button>
                <Menu
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    {options.map((option, index) =>
                        <MenuItem
                            key={option}
                            selected={index === selectedIndex}
                            onClick={(event) => handleMenuItemClick(event, index)}
                        >
                            {option}
                        </MenuItem>
                    )}
                </Menu>
            </Box>
        </Box>
    );
};

export default Control;