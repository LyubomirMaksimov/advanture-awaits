import React, { Fragment } from "react";
import "./App.css";
import NavBar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <React.Fragment>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact />
        </Routes>
      </Router>
    </React.Fragment>
  );
}

export default App;
