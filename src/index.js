import React from "react";
import ReactDOM from "react-dom/client"
import App from "./App";
// import reportWebVitals from "./reportWebVitals";

import * as serviceWorker from "./serviceWorker";

import { StateProvider } from "./StateProvider/StateProvider";
import reducer , {initialState} from "./reducer/reducer.js"
//const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(
  /*ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
    <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);*/
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>
);

serviceWorker.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
