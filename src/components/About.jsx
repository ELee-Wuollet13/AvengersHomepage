import React from 'react';
import { Link } from 'react-router-dom';
import { Router } from 'react-router-dom';
import styled from 'styled-components';
import capPic from '../images/cap.jpg';
import ironPic from '../images/ironman.png';
import thorPic from '../images/thor.jpg';
import widowPic from '../images/blackwidow.jpg';
import hulkPic from '../images/hulk.jpg';
import hawkeyePic from '../images/hawkeye.jpg';
import StevePic from '../images/Steve.jpg';
import tonyStarkPic from '../images/tonyStark.jpg';
import ThorCasualPic from '../images/ThorCasual.jpg';
import BruceBannerPic from '../images/BruceBanner.png';
import BartonPic from '../images/Barton.jpg';
import RomonoffPic from '../images/Romonoff.jpg';
import CharacterCards from './CharacterCards.jsx'

const characters = [
  {
    name: 'Captain America',
    image: {capPic},
    image2: {StevePic},
    bio:  'America’s World War II Super-Soldier continues his fight in the present as an Avenger and untiring sentinel of liberty.',
    powers: 'Super human speed, strength, and agility. Skilled fighter and highly profecient with a shield.'
  },
  {
    name: 'Iron Man',
    image: {ironPic},
    image2: {tonyStarkPic},
    bio:  "Genius. Billionaire. Playboy. Philanthropist. Tony Stark's confidence is only matched by his high-flying abilities as the hero called Iron Man",
    powers: 'Genius mind, super suit that lends strength durability and flight.'
  },
  {
    name: 'Thor',
    image: {thorPic},
    image2: {ThorCasualPic},
    bio:  "The son of Odin uses his mighty abilities as the God of Thunder to protect his home Asgard and planet Earth alike.",
    powers: 'Worthy of weilding the mighty hammer Mjolnir, Thor capable of flight, super strength, and godly thunder powers.'
  },
  {
    name: 'Hulk',
    image: {hulkPic},
    image2: {BruceBannerPic},
    bio:  "Dr. Bruce Banner lives a life caught between the soft-spoken scientist he’s always been and the uncontrollable green monster powered by his rage.",
    powers: 'As Hulk, he is virtualy indesctructible and has immense strength. But as Bruce Banner, his mind is only matched by the likes of Tony Stark.'
  },
  {
    name: 'Black Widow',
    image: {widowPic},
    image2: {RomonoffPic},
    bio:  "Despite super spy Natasha Romanoff’s checkered past, she’s become one of S.H.I.E.L.D.’s most deadly assassins and a frequent member of the Avengers.",
    powers: 'Black Widow is a master fighter and also a talented spy and operative.'
  },
  {
    name: 'Hawkeye',
    image: {hawkeyePic},
    image2: {BartonPic},
    bio:  "A master marksman and longtime friend of Black Widow, Clint Barton serves as the Avengers’ amazing archer.",
    powers: 'Hawkeye is a master marksman and one of Shields best agents'
  },

]


function About(){

  return (
    <div class="aboutSection">
    <h1 className='aboutHeader'> About </h1>
    <div className='characterCards'>
    {characters.map((character, index)=>
      <CharacterCards
      name={character.name}
      image={character.image}
      image2={character.image2}
      bio={character.bio}
      powers={character.powers}/>
    )}

    <style jsx>{`
      .aboutHeader{
        color: white;
        text-align: center;
      }
      .characterCards{
        display: flex;
        flex-flow: row wrap;
        width: 100%;
        animation: fade-in 1s, slide-down 3s ;

      }

      @keyframes slide-down {
        0% { margin-top: -1000px }
        100% { marign-top: 0px }
      }

      @keyframes fade-in {
        0% { opacity: 0 }
        100% { opacity: 1}
      }
      .aboutSection{
        position: absolute;
        z-index: -1;
      }
      `}</style>
    </div>
    </div>

  );
};

export default About;
