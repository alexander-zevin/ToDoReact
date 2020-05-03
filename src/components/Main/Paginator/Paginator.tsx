import React, {FC} from 'react';
import {Pagination} from "@material-ui/lab";
import {IPaginatorProps} from "./PaginatorTypes";
import {Box} from "@material-ui/core";
import useStyles from "./PaginatorStyles";

const Paginator: FC<IPaginatorProps> = props => {

    const classes = useStyles();

    const pagesCount: number = Math.ceil(props.tasks.length / props.pageSize);

    return (
        <Box className={classes.root}>
            <Pagination count={pagesCount} onChange={props.paginatorChange} color="primary"/>
        </Box>
    );
};

export default Paginator;