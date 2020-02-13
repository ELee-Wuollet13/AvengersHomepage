import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import About from './components/About.jsx'
import { Switch, Route, Router } from 'react-router-dom';
function App() {
  return (
    <div >
    <Navbar/>
    <Header/>
    <Switch>
    <Route path='/about' component={About}/>
    </Switch>

    </div>
  );
}

export default App;
