import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { Redirect } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/";
import About from "./pages/about";
import TheFarm from "./pages/theFarm";
import Contact from "./pages/contact";
import Dogs from "./pages/dogs";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/theFarm" component={TheFarm} />
            <Route path="/dogs" component={Dogs} />
            <Route path="/contact" component={Contact} />
          </Routes>
        </Router>
      </h1>
    </div>
  );
}

export default App;
