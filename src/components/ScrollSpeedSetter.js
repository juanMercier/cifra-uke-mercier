import React, { useState } from 'react';
import '../styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPause } from '@fortawesome/free-solid-svg-icons';

const ScrollSpeedSetter = ({scrollSpeed, onScrollSpeedChange}) => {

    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlayPause = () => {
        if (isPlaying) {
          onScrollSpeedChange(0);
        } else {
          onScrollSpeedChange(scrollSpeed > 0 ? scrollSpeed : 2);
        }
        setIsPlaying(!isPlaying);
      };
    return (
    <div className="scroll-speed-control">
        <label>Speed: </label>
        <div className="scroll-speed-buttons">
            <button
                className="scroll-speed-control-button"
                onClick={() => onScrollSpeedChange(scrollSpeed - 1)}
                disabled={scrollSpeed <= 0 || !isPlaying}
            >
                -
            </button>
            <span>{scrollSpeed}</span>
            <button
                className="scroll-speed-control-button"
                onClick={() => onScrollSpeedChange(scrollSpeed + 1)}
                disabled={scrollSpeed >= 5 || !isPlaying}
            >
                +
            </button>
            <button
                className="scroll-speed-control-button play-pause-button"
                onClick={togglePlayPause}
            >
                {isPlaying ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
            </button>
        </div>
    </div>);


}


export default ScrollSpeedSetter;