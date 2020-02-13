import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import AvTower from '../images/AvTower.jpg'
import AvNameLogo from '../images/AvNameLogo.png'


function Header(){

  return (
    <div className='header'>
    <style jsx>{`
      body {
        background-color: #3A506B
      }
      .avTower {
        width: 100%;
        z-index: -1;
        border-radius: 30px;
      }
      .textBox {
        text-align: center;
        margin-top: -300px;
        z-index: 1;
        color: gray;
      }

      `}</style>
    <div>
    <img className='avTower' src={AvTower}/>
    <div className='textBox'>
    <img className='avName' src={AvNameLogo}/>
    <h1>Welcome to the Avengers home page</h1>
    </div>
    </div>
    </div>
  );
};

export default Header;
