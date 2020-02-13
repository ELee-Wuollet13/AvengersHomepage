import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import logo from '../images/logo.png';

function Navbar(){
  const header = {


    fontSize: "22px",
  }
  const h3 = {
    display: "inline-block",
    padding: "5px",
    textAlign: "center",
  }
  const divstyle = {
    marginLeft: "25%",
    fontSize: "12px",
    textAlign: 'center',
  }
  const navbar = {
    display: "inline-block",
    display: "flex",
    flexDirection: "row",
    backgroundColor: 'rgba(0, 43, 201, 0.5)',
    width: "100vw",
    height: "52px",
    color: "white",
    marginLeft: "-8px",
    marginTop: '-10px',
    textAlign: 'center',
    paddingLeft: '10px',
    fontFamily: "'Source Sans Pro', sans-serif",
    fontWeight: "400",
  }

  const righth3 = {
    display: "inline-block",
    padding: '5px',
  }

  const menubars = {
    display: "inline-block",
    padding: '5px',
    marginTop: '10px',
    fontSize: '16px',
  }

  const rightsidenav = {
    display: "inline-block",
    marginLeft: '10vw'
  }
  const videostyle = {
    position: "absolute",
    left: "0px",
    top: "0px",
    zIndex: "-1",
    width: "100vw",
  }


  const careers = {
    display: "inline-block",
    display: "flex",
    flexDirection: "row",
    marginLeft: "-25%",
    opacity: "80%",
    fontSize: "30px",
    fontWeight: "200",
  }

  const videoText = {
    display: "inline-block",
    display: "flex",
    flexDirection: "row",
    marginTop: "4%",
    fontFamily: "'Gothic A1', sans-serif",
  }

  const h4div = {
    display: "inline-block",
    display: "flex",
    flexDirection: "row",
    fontSize: "14px",
    marginLeft: "60%",
    opacity: "50%",
  }

  const h4 = {
    padding: "5px",
  }

const line = {
      borderBottom: "1px solid white",
      marginLeft: "-25%",
      width: "120%",
      opacity: "50%",
}

const headerDivWrap={
  width: "100vw",
  height: "50vh"


}

const logoStyle = {
  width: '40px',
  height: '40px',
  marginTop: '10px',
}

const HoverText = styled.h4`
  padding: 5px;
  :hover{
    color: grey;
    cursor: pointer;
  }`

  return (
    <div>

    <div style={navbar}>

    <img style={logoStyle} src={logo}/>
    <h1 style={header} className="headerClass">Avengers</h1>
    <div style={divstyle}>
    <h3 style={h3}>  </h3> <h3 style={h3}> Age of Ultron </h3> <h3 style={h3}> Infinity War </h3> <h3 style={h3}> End Game </h3> <h3 style={h3}> About Us </h3>
    <style jsx>{`
      a:visited {
        color:white
      }
      `}</style>

    </div>

  </div>
    </div>
  );
}

export default Navbar;
