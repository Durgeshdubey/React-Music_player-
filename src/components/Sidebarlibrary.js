import React from 'react';
import Librarysong from './Librarysong';


const sidebarlibrary = ({ songs , setCurrentSong }) => {
    return(
        <div class = "sidebarlibrary">
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
                //  audioRed = {audioRef}
                //  setSongs = {setSongs}
            />
             ))}
            </div>
        </div>
    );

};

export default sidebarlibrary;