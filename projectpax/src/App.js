import React, { Component } from "react";
import "./App.css";
import ReactDOM from "react-dom";
import { Redirect } from "react-router";
import { Link, NavLink } from "react-router-dom";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages";
import About from "./pages/about";
import TheFarm from "./pages/theFarm";
import Donate from "./pages/donate";
import Dogs from "./pages/dogs";
import Header from "./components/Header";
import MainBody from "./components/MainBody";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>
        <Header />
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/theFarm" component={TheFarm} />
            <Route path="/dogs" component={Dogs} />
            <Route path="/donate" component={Donate} />
          </Routes>
        </Router>
        <MainBody />
      </h1>
    </div>
  );
}

export default App;
