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
    <div className='topPage'>
    <Navbar/>
    <Header/>
    </div>
    <Switch>
    <div className='content'>
    <Route path='/about' component={About}/>
    </div>
    </Switch>
    <style jsx> {`

      `}</style>

    </div>
  );
}

export default App;
