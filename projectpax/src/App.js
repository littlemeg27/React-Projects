import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { Redirect } from "react-router";
import { Link, NavLink } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/";
import About from "./pages/about";
import TheFarm from "./pages/theFarm";
import Contact from "./pages/contact";
import Dogs from "./pages/dogs";

function App() {
  return (
    <div className="App">
      <About />
      <Contact />
      <Dogs />
      <Home />
      <TheFarm />

      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/theFarm" component={TheFarm} />
          <Route exact path="/dogs" component={Dogs} />
          <Route exact path="/contact" component={Contact} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
