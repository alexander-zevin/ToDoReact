import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        width: '700px',
        height: '100vh',
        [theme.breakpoints.up('sm')]: {
            height: '80vh',
        },
        display: 'flex',
        flexDirection: 'column'
    }
}));

export default useStyles;