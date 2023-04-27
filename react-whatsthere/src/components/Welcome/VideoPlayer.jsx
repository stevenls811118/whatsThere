import React from 'react';
import ReactPlayer from 'react-player';

export default function VideoPlayer({ src }) {
  return (
      <ReactPlayer
        url="https://streamable.com/uraqi1"
        width="50%"
        height="50%"
        controls
        className="absolute top-0 right-0 w-[30%] h-screen z-10 pl-4"
      />
  );
}