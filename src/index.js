import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./index.css";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Decks from "./routes/decks/Decks";
import Board from "./routes/board/Board";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  //<React.StrictMode>
  <HashRouter>
    {/*Change for HashRouter if deploying to GH-Pages*/}
    <Provider store={store}>
      <Routes>
        <Route exact path="/" element={<Navigation />} />
        <Route exact path="/decks" element={<Decks />} />
        <Route exact path="/board" element={<Board />} />
      </Routes>
    </Provider>
  </HashRouter>
  //</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
