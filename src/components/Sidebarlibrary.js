import React from 'react';
import Librarysong from './Librarysong';


const sidebarlibrary = ({audioRef, setSongs ,songs , isPlaying , setCurrentSong, libraryStatus }) => {
    return(
        <div className = {`sidebarlibrary ${libraryStatus ? 'active-library' : ''}`}>
            <h2>
                library
            </h2>
            <div className="library-songs">
             {songs.map((song) => (
                 <Librarysong 
                 songs={songs} 
                 song={song} 
                 setCurrentSong={setCurrentSong}
                 id={song.id}
                 key = {song.id}  
                 audioRef={audioRef} 
                 isPlaying = {isPlaying}
                 setSongs = {setSongs}
                //  audioRed = {audioRef}
                //  setSongs = {setSongs}
            />
             ))}
            </div>
        </div>
    );

};

export default sidebarlibrary;