import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './_helpers'
import App from './App/app'
import css from './_styles/style.css'

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('.container')
);