import React from 'react';
// import { isReturnStatement } from 'typescript';


const librarysong =  ({audioRef ,song, songs,isPlaying , setSongs ,setCurrentSong ,id }) => {

    const songSelectHandler = () => {
            setCurrentSong(song);
            audioRef.current.play();


/// ADD ACTIVE SONG 

const newSongs = songs.map((song) => {
        if( song.id === id){
            return{
                ...song,
                active: true,
            };
        } else {
            return {
                ...song,
                active: false,
            };
        }
});
setSongs(newSongs)


            if(isPlaying) {
                const playpromise = audioRef.current.play();
                if(playpromise !== undefined){
                    playpromise.then((audio) => {
                        audioRef.current.play();
                    })
                }
            }
    };

    return(
        <div onClick={songSelectHandler} 
        className={`librarysong ${song.active ? 'selected' : ""}`} > 
            <img alt={song.name} src = {song.cover}></img>
            <div className="song-description">
            <h3>{song.name}</h3>
            <h4>{song.artist}</h4>
            </div>
        </div>
    );
};

export default librarysong;