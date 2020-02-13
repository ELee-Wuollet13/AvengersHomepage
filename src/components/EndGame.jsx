import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import moviepic from '../images/end-game.jpg'
import image1 from "../images/eg/eg1.jpg"
import image2 from "../images/eg/eg2.jpeg"
import image3 from "../images/eg/eg3.png"
import image4 from "../images/eg/eg4.jpg"
import image5 from "../images/eg/eg5.jpg"

import { Slide } from 'react-slideshow-image';

const slideImages = [
  image1,
  image2,
  image3,
  image4,
  image5,
];

const properties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}




function EndGame(){

  return (
    <div >
    <h2 className='headerTitle'> The Blip </h2>
    <h4 className='movieBio'> Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.</h4>
    <img className='posterImage'src={moviepic}/>
      <div className="slide-container">
      <Slide {...properties}>
      <div className="each-slide">
      <div style={{'backgroundImage': `url(${slideImages[0]})`, 'background-repeat': `no-repeat`, 'background-size': `contain`}}>
      </div>
      </div>
      <div className="each-slide">
      <div style={{'backgroundImage': `url(${slideImages[1]})`, 'background-repeat': `no-repeat`, 'background-size': `contain`}}>
      </div>
      </div>
      <div className="each-slide">
      <div style={{'backgroundImage': `url(${slideImages[2]})`, 'background-repeat': `no-repeat`, 'background-size': `contain`}}>
      </div>
      </div>
      <div className="each-slide">
      <div style={{'backgroundImage': `url(${slideImages[3]})`, 'background-repeat': `no-repeat`, 'background-size': `contain`}}>
      </div>
      </div>
      <div className="each-slide">
      <div style={{'backgroundImage': `url(${slideImages[4]})`, 'background-repeat': `no-repeat`, 'background-size': `contain`}}>
      </div>
      </div>
      </Slide>
      </div>
      <style jsx>{`
        .posterImage{
          margin-top: 2%;
          float: left;
        }
        .movieImage{

          margin-top: 2%;
          padding-left: 5%;
          height: 400px;
        }

        .headerTitle {
          text-align: center;
          color: white;
          margin-top: 2%;
        }
        .movieBio{
          width: 600px;
          text-align: center;
          margin-left: auto;
          margin-right: auto;
          color: white;
          padding: 20px;
          line-height: 1.6;
          font-size: 18px;
          background-color: #262626;
          border-radius: 20px;
        }

.each-slide > div {
margin-top: 2%;

border-radius: 20px;
  height: 600px;
  width: 1000px;
}







        `}</style>
      </div>
    );
  };

  export default EndGame;
