import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import './styles/main.css'
import "antd/dist/antd.css";
import App from "./Routes";
import registerServiceWorker from "./registerServiceWorker";
import './utils/Interceptors'

const root = document.getElementById("root");

const renderer = (
  <Provider>
    <App />
  </Provider>
);

ReactDOM.render(renderer, root);
registerServiceWorker();
