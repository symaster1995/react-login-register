import React from 'react';
import { render } from 'react-dom';
import App from './App/app';
import css from './_styles/style.css'

render(
    <div>
        <App />
    </div>,
    document.querySelector('.container')
);