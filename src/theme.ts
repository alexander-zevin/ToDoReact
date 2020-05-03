import {createMuiTheme, Theme} from "@material-ui/core";
import {indigo} from "@material-ui/core/colors";

const theme: Theme = createMuiTheme({
    palette: {
        primary: {
            main: indigo[400]
        },
        success: {
            main: indigo[400]
        }
    }
});

export default theme