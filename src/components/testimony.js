import React from 'react';
import '../stylesheets/testimony.css'

function Testimony(props) {
  return (
    <div className='testimony-container'>
      <img 
        className='testimony-img'
        src={require(`../images/${props.img}-testimony.png`)}
        alt={`Picture of ${props.alt}`}
        />
      <div className='testimony-text-container'>
        <p className='testimony-name'>
          <strong>{props.name}</strong> in {props.country}
          </p>
        <p className='testimony-job'>{props.job} at <strong>{props.company}</strong></p>
        <p className='testimony-text'>"{props.testimony}</p>
      </div>
    </div>
  );
}

const shawn = {
  name: 'Shawn Wang',
  country: 'Singapore',
  img: 'shawn',
  alt: 'Shawn',
  job: 'Software Engineer',
  company: 'Amazon',
  testimony: 'It is scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life.'
}

const sarah = {
  name: 'Sarah Chima',
  country: 'Nigeria',
  img: 'sarah',
  alt: 'Sarah',
  job: 'Software Engineer',
  company: 'ChatDesk',
  testimony: 'freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.'
}

const emma = {
  name: 'Emma Bostian',
  country: 'Sweden',
  img: 'emma',
  alt: 'Emma',
  job: 'Software Engineer',
  company: 'Spotify',
  testimony: 'I have always struggled with learning JavaScript. I have taken many courses but freeCodeCamp course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify.'
}


export {Testimony, shawn, sarah, emma}