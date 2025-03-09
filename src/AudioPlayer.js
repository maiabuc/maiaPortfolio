import React, { useState } from "react";
import Music from "./images/TheMusic.mp3";

import playImage from "./images/play-buttton.png"; // Import play button image
import pauseImage from "./images/pause.png"; // Import pause button image

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false); // Set initial state to true to start playing by default
  const audioRef = React.useRef();

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <audio ref={audioRef} src={Music} preload="auto" autoPlay />
      <img
        src={isPlaying ? pauseImage : playImage} // Switch between play and pause images
        alt={isPlaying ? "Pause" : "Play"}
        onClick={togglePlayPause} // Toggle play/pause on click
        style={{ cursor: "pointer" }} // Make the image clickable
        className="play-button"
      />
    </div>
  );
};

export default AudioPlayer;
