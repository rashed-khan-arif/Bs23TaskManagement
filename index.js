import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { store } from './src/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import "./src/assets/css/App.css";
import { createBrowserHistory } from "history";

const history = createBrowserHistory({ window });

const rootElement = document.getElementById('root')

ReactDOM.render(
    <BrowserRouter history={history}>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    rootElement
);