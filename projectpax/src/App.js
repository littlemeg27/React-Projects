import React, { Component } from "react";
import './App.css';
import ReactDOM from 'react-dom';
import { Redirect } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages';
import About from './pages/about';
import Contact from './pages/contact';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Header from './components/aboutHeader'
import { useState } from 'react'
//import Header from './components/about/Header'

function App() {
  return (
  <div className="App">
    <h1>
      <Header  />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/signin" component={SignIn} />
          <Route path="/sign-up" component={SignUp} />
        </Routes>
      </Router>
    </h1>
    <h1>Hello From React</h1>
  </div>
  );
}

export default App;