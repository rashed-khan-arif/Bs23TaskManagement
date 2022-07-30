import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { store } from './src/store/index'
import { Provider } from 'react-redux'

const rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    rootElement
);