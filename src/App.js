import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar.jsx'
import Header from './components/Header.jsx'
import AgeOfUltron from './components/AgeOfUltron.jsx'
import InfinityWar from './components/InfinityWar.jsx'
import EndGame from './components/EndGame.jsx'
import About from './components/About.jsx'
import Home from './components/Home.jsx'
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
    <Route exact path="/" component={Home}/>
    <Route path='/about' component={About}/>
    <Route path='/AgeOfUltron' component={AgeOfUltron}/>
    <Route path='/InfinityWar' component={InfinityWar}/>
    <Route path='/EndGame' component={EndGame}/>
    </div>
    </Switch>
    <style jsx> {`

      `}</style>

    </div>
  );
}

export default App;
