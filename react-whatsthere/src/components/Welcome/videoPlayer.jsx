import React, { useRef } from 'react';

export default function VideoPlayer({ src }) {
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
  };

  const handlePause = () => {
    videoRef.current.pause();
  };

  return (
    <div>
      <video
        src={src}
        ref={videoRef}
        width="500"
        height="300"
        controls
      />
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div>
    </div>
  );
};

