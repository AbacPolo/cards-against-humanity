import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navigation from "./routes/navigation/Navigation";
import Board from "./routes/board/Board";
import Decks from "./routes/decks/Decks";

function App() {
  return (
    <div className="App_Container">
      <div className="App_Wrapper">
        <Routes>
          <Route exact path="/" element={<Navigation />} />
          <Route exact path="/decks" element={<Decks />} />
          <Route exact path="/board" element={<Board />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
