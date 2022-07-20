import './App.css';
import {Testimony, shawn, sarah, emma} from './components/testimony.js'

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        {/* <Testimony 
        name='Shawn Wang'
        country='Singapore'
        img='shawn'
        alt='Shawn'
        job='Software Engineer'
        company='Amazon'
        testimony={[`It is scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. `, <strong> freeCodeCamp changed my life.</strong>]}
        />
        <Testimony 
        name='Sarah Chima'
        country='Nigeria'
        img='sarah'
        alt='Sarah'
        job='Software Engineer'
        company='ChatDesk'
        testimony={[<strong>freeCodeCamp was the gateway to my career </strong>, ` as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company.`]}
        />
        <Testimony 
        name='Emma Bostian'
        country='Sweden'
        img='emma'
        alt='Emma'
        job='Software Engineer'
        company='Spotify'
        testimony={[`I have always struggled with learning JavaScript. I have taken many courses but freeCodeCamp course was the one which stuck. Studying JavaScript as well as data structures and algorithms on `, <strong>freeCodeCamp gave me the skills</strong>,  ` and confidence I needed to land my dream job as a software engineer at Spotify.`]}
        /> */}
        <Testimony {...shawn}/>
        <Testimony {...sarah}/>
        <Testimony {...emma}/>
      </div>
      
    </div>
  );
}

export default App;
