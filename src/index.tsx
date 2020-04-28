import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from "./theme";
import {Provider as StoreProvider} from "react-redux";
import {store} from "./store/store";

ReactDOM.render(
    <React.StrictMode>
        <StoreProvider store={store}>
            <ThemeProvider theme={theme}>
                <App/>
            </ThemeProvider>
        </StoreProvider>
    </React.StrictMode>,
    document.getElementById('root')
);

serviceWorker.unregister();
