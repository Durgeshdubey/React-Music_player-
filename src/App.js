import React , { useState , useRef } from 'react';
import './styles/app.scss';
//Adding Components
import Player from './components/Player';
import Songs from './components/Songs';
//import songs_data
import songs_data from './songs_data';
// import librarysong from './components/librarysong';
import Sidebarlibrary from './components/Sidebarlibrary';

import  Nav  from "./components/Nav";

function App () {

  const audioRef = useRef(null);
  // state

 const [ songs, setSongs ] = useState(songs_data());

 // state current song

 const [ currentSong , setCurrentSong ] = useState(songs[0]);


 // song interaction state

 const [ isPlaying , setIsPlaying ] = useState(false);
 const [songInfo, setSongInfo] = useState({
  currentTime: 0,
  duration: 0,
});

const [libraryStatus, setLibraryStatus] = useState(false);
const timeUpdateHandler = (e) => {
  const current = e.target.currentTime;
  const duration = e.target.duration;
  setSongInfo({ ...songInfo, currentTime: current, duration });
};


  return(
      <div className="App">
        <Nav libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus}/>
        <Songs currentSong={currentSong} />
        <Player 
        songInfo={songInfo}
        setSongInfo={setSongInfo}
        // onTimeUpdate={timeUpdateHandler}
        // onLoadedMetadata={timeUpdateHandler}
        audioRef={audioRef}
        setIsPlaying={setIsPlaying} 
        isPlaying={isPlaying} 
        currentSong={currentSong} />
        <Sidebarlibrary audioRef={audioRef}
         songs={songs} 
         setCurrentSong={setCurrentSong}
         isPlaying = {isPlaying}
         setSongs = {setSongs}
         libraryStatus ={libraryStatus}
         />
        <audio
        onLoadedMetadata={timeUpdateHandler}
        onTimeUpdate={timeUpdateHandler}
        ref={audioRef}
        src={currentSong.audio}
      ></audio>
      </div>  
  );
}

export default App;
