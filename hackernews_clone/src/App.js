import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./router";
import "./App.css";
import Header from "./components/header";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Routes></Routes>
      </Router>
    </div>
  );
};

export default App;
