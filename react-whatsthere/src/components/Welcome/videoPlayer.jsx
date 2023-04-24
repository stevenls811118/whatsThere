import React, { useRef  } from 'react';
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
    <React.Fragment>
      <video
        src={src}
        ref={videoRef}
        width="1000"
        height="800"
        controls
      />
    </React.Fragment>
  );
};

