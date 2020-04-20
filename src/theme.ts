import {createMuiTheme} from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import indigo from "@material-ui/core/colors/indigo";

export const theme = createMuiTheme({
    palette: {
        primary: {
            main: indigo["400"],
        },
        secondary: {
            main: green.A700,
        },
        success: {
            main: indigo["400"]
        }
    },
    typography: {
        body1: {
            fontSize: 18,
            /*'@media (min-width:600px)': {
                fontSize: 18,
            }*/
        }
    },
    props: { //Плотность Button
        MuiButton: {
            size: 'large',
        }
    },
    overrides: { //Переопределить плотность Button
        MuiButton: {
            // sizeLarge: {
            //     padding: 5,
            // },
        },
    },
});

