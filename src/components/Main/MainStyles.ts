import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        width: '100vw',
        height: '100vh',
        [theme.breakpoints.up('sm')]: {
            height: '80vh',
            width: '700px',
        },
        minWidth: '250px',
        display: 'flex',
        flexDirection: 'column'
    }
}));