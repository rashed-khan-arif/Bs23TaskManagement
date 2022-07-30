import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { store } from './src/store/index'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import "./src/assets/css/App.css";

const rootElement = document.getElementById('root')

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    rootElement
);