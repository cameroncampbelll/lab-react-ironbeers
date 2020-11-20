import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Welcome to IronBeers</h1>
      <Link to="/beers">All Beers</Link>
      <br></br>
      <Link to="/random-beer">Random Beers</Link>
      <br></br>
      <Link to="/new-beer">New Beers</Link>
    </div>
  );
}

export default App;
