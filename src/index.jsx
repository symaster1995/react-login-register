import React from 'react'
import App from './App/app'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './_helpers'
import css from './_styles/style.css'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('.container')
);