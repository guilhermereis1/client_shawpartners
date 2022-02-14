import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import "antd/dist/antd.css";
import configureStore from "./ configureStore";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();
const initialState: any = {};
const store = configureStore(history, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
