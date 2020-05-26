import React, {FC} from 'react';
import {FilterContainer} from "./Filter/FilterContainer";
import {IToolsProps} from "./ToolsTypes";
import {SortContainer} from "./Sort/SortContainer";
import {Box} from "@material-ui/core";
import useStyles from "./ToolsStyles";

export const Tools: FC<IToolsProps> = ({filter, sortBy}) => {
    const classes = useStyles();
    return (
        <Box className={classes.root}>
            <FilterContainer filter={filter} />
            <SortContainer sortBy={sortBy} />
        </Box>
    )
};