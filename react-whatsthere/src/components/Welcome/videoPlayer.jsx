import React, { useRef } from 'react';
// This component takes a src prop, which should be the URL of the video file you want to play.
//  It uses a videoRef to reference the <video> element,
//   and two event handlers to handle play and pause button clicks.
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
        src="https://www.youtube.com/embed/eEzD-Y97ges"
        ref={videoRef}
        width="1000"
        height="800"
        controls
      >
        <source src="https://www.youtube.com/embed/eEzD-Y97ges" type="video/mp4" />
          Your browser does not support the video tag.
      </video>



      {/* <video
        src="https://www.youtube.com/embed/eEzD-Y97ges"
        ref={videoRef}
        width="1000"
        height="800"
        controls
      />
      <div>
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>Pause</button>
      </div> */}
    </div>
  );
};

