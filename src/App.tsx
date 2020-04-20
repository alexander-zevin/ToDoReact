import React from 'react';
import styles from './App.module.scss';
import {ThemeProvider} from '@material-ui/styles';
import {theme} from "./theme";
import {Provider} from "react-redux";
import {store} from "./store/store";
import {MainContainer} from "./components/Main/MainContainer";
import {Box} from "@material-ui/core";

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Box className={styles.app}>
                    <MainContainer/>
                </Box>
            </Provider>
        </ThemeProvider>
    );
};

export default App;
