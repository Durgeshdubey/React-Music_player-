import React, {useRef, useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faAngleLeft, faAngleRight, faPause } from '@fortawesome/free-solid-svg-icons';


const Player =  ({ currentSong , isPlaying , setIsPlaying }) => {

   

    // state
    const [songInfo, setSongInfo]  = useState({
        currentTime:0,
        duration:0,
    });
    const audioRef = useRef(null);

    //Event Handlers


    const dragHandler = (e) => {
        audioRef.current.currentTime = e.target.value;
        setSongInfo({...songInfo , currentTime: e.target.value})
    };
    const playSongHandler = () => {
        
        if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else{
        audioRef.current.play();
        setIsPlaying(!isPlaying);
    }
};
const timeUpdateHandler  = (e) => {
    const current = e.target.currentTime;
    const duration = e.target.duration;
    setSongInfo({...songInfo , currentTime:current , duration})
};

const getTIme = (time) => {
    return (
        Math.floor(time / 60) + ":" + ("0" + Math.floor(time % 60)).slice(-2)
    );
};

    return(
        <div className="player">
            <div className="time-control">
            <p>{getTIme(songInfo.currentTime)}</p>
            <input onChange={dragHandler} min = {0} max = {songInfo.duration} value = {songInfo.currentTime} type = "range"/>
            <p>{getTIme(songInfo.duration)}</p>
            </div>
            <div className="play-control">

                <FontAwesomeIcon className="back" size="2x" icon={faAngleLeft}/>
                <FontAwesomeIcon onClick={playSongHandler} 
                className="play"
                 size="2x" 
                 icon={isPlaying ? faPause : faPlay}
                 />
                <FontAwesomeIcon className="forward" size="2x" icon={faAngleRight}/>
            </div>
            <audio onLoadedMetadata = {timeUpdateHandler} onTimeUpdate={timeUpdateHandler} ref={audioRef} src={currentSong.audio}></audio>
        </div>
    );
};

export default Player;