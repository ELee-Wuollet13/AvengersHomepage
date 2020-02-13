import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import styled from 'styled-components';



function CharacterCards(props){

  return (
    <div className='header'>
    <div className="character">
    <img className='profileImg' src={props.image.capPic || props.image.ironPic || props.image.thorPic || props.image.hulkPic || props.image.widowPic || props.image.hawkeyePic}/>
    {console.log(props)}
    <div className='charInfo'>
    <h2 className="charName">{props.name}</h2>
    <h3 className="charBio"> {props.bio}</h3>
    <h3 className="charPowers"> {props.powers}</h3>
    </div>
    </div>
    <style jsx>{`
      .profileImg {

        width: 400px;
        border-radius: 30px;


      }
      .character {
        padding: 10px;
        border: 1px solid black;
        width: 400px;
        height: 600px;

      }
      .charName{
        text-align: center;
        color: white;
        border: 1px solid white;
        border-radius: 10px;
      }
      .charBio, .charPowers{
        color: #97ABB1;
      }
      .charInfo{
        padding: 6px;
        background-color: #262626;
        border-radius: 20px;
      }
      `}</style>
    </div>
  );
};

export default CharacterCards;
