import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import moviepic from '../images/aou.jpg'
import image1 from "../images/aou/aou1.jpg"
import image2 from "../images/aou/aou2.jpg"
import image3 from "../images/aou/aou3.jpg"


import { Slide } from 'react-slideshow-image';

const slideImages = [
  image1,
  image2,
  image3
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




function AgeOfUltron(){

  return (
    <div >
    <h2 className='headerTitle'> The Sokovia Incident </h2>
    <h4 className='movieBio'> When Tony Stark jump-starts a dormant peacekeeping program, things go terribly awry, forcing him, Thor, the Incredible Hulk and the rest of the Avengers to reassemble. As the fate of Earth hangs in the balance, the team is put to the ultimate test as they battle Ultron, a technological terror hell-bent on human extinction. Along the way, they encounter two mysterious and powerful newcomers, Pietro and Wanda Maximoff.</h4>
    <img className='posterImage'src={moviepic}/>
      <div className="slide-container">
      <Slide {...properties}>
      <div className="each-slide">
      <div style={{'backgroundImage': `url(${slideImages[0]})`}}>
      </div>
      </div>
      <div className="each-slide">
      <div style={{'backgroundImage': `url(${slideImages[1]})`}}>
      </div>
      </div>
      <div className="each-slide">
      <div style={{'backgroundImage': `url(${slideImages[2]})`}}>
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
border: 2px solid black;
border-radius: 20px;
  height: 600px;
  width: auto;
}







        `}</style>
      </div>
    );
  };

  export default AgeOfUltron;
