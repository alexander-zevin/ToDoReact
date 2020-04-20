import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import CssBaseline from "@material-ui/core/CssBaseline";
import 'typeface-roboto';

ReactDOM.render(
    <React.StrictMode>
        <CssBaseline />
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);
