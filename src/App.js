import React , { useState } from 'react';
import './styles/app.scss';
//Adding Components
import Player from './components/Player';
import Songs from './components/Songs';
//import songs_data
import songs_data from './songs_data';
// import librarysong from './components/librarysong';
import Sidebarlibrary from './components/Sidebarlibrary';

function App () {

  // state

 const [ songs, setSongs ] = useState(songs_data());

 // state current song

 const [ currentSong , setCurrentSong ] = useState(songs[0]);

 // song interaction state

 const [ isPlaying , setIsPlaying ] = useState(false);

  return(
      <div className="App">
        <Songs currentSong={currentSong} />
        <Player setIsPlaying={setIsPlaying} 
        isPlaying={isPlaying} 
        currentSong={currentSong} />
        <Sidebarlibrary songs={songs} setCurrentSong={setCurrentSong}/>
       
      </div>  
  );
}

export default App;
