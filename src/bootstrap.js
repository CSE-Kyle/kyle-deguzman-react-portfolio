import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { BrowserRouter } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

import "./style/main.scss";

function main() { 
  ReactDOM.render( // ReactDOM - you're using an application, or you're going to be building an application that is going to be rendered in the browser, not on a smart phone.
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>,
    document.querySelector(".app-wrapper") // using a regular, just pure vanilla JavaScript selector and you're saying you want you to find a class on the page called app wrapper.
  );
}

document.addEventListener("DOMContentLoaded", main); // giving you the ability to see when the page has loaded and then it injects main.
