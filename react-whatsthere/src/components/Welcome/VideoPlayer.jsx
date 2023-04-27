import React from "react";
import ReactPlayer from "react-player";
import landing3 from "../../images/landing3.png";

export default function VideoPlayer({ src }) {
  return (
    <div
      className="bg-cover bg-center min-h-screen relative"
      style={{ backgroundImage: `url(${landing3})` }}
    >
      <ReactPlayer
        url="https://streamable.com/uraqi1"
        width="41.79%"
        height="52%"
        controls
        className="absolute top-1/2 left-1/2 transform -translate-x-4 -translate-y-1/3"
      />
    </div>
  );
}
