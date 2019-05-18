"use strict";
/* 
Convey's game of life in React and Redux JS. 
*/
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "./style.css";
import Settings from "./components/settings.jsx";
import Board from "./components/board.jsx";
import Generate from "./components/generate.jsx";
import store from "./store";
import Stats from "./components/stats.jsx";

function App() {
  return (
    <>
      <Settings />
      <Stats />
      <Board />
      <Generate />
    </>
  );
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);