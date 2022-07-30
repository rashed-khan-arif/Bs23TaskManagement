import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App';
import { store } from './src/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import "./src/assets/css/App.css";
import { createBrowserHistory } from "history";
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import ReduxToastr from 'react-redux-toastr'

const history = createBrowserHistory({ window });

const rootElement = document.getElementById('root')



ReactDOM.render(
    <Provider store={store}>
        <div>
            <BrowserRouter history={history}>
                <App />
            </BrowserRouter>
            <ReduxToastr
                timeOut={4000}
                newestOnTop={false}
                preventDuplicates
                position="top-left"
                getState={(state) => state.toastr} // This is the default
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar
                closeOnToastrClick />
        </div>

    </Provider>,
    rootElement
);