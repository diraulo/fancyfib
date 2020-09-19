import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Fib from "./Fib";
import OtherPage from "./OtherPage";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Link to="/">Home</Link>
        <Link to="/other-page">Other Page</Link>
      </header>
      <div>
        <Route exact path="/" component={Fib} />
        <Route exact path="/other-page" component={OtherPage} />
      </div>
    </div>
  );
}

export default App;
