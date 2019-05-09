import React from 'react'
import App from './App/app'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './_helpers'
import { authConstants } from './_constants'
import css from './_styles/style.css'

const user = localStorage.getItem('clientToken')

if (user) {
    store.dispatch({ type: authConstants.AUTHENTICATED })
}

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('.container')
);