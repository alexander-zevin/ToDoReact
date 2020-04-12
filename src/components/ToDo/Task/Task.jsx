import React from 'react';
import styles from './Task.modules.css';

export const Task = ({id, text, key}) => (
    <div id={id} key={key}>{text}</div>
);