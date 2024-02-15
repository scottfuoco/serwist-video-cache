"use client";

import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

export default function VideoComponent({ videoUrl }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <></>;

  return (
    <ReactPlayer
      url={videoUrl}
      volume={0}
      muted
      playsinline
      playing
      loop
      width={300}
      controls={true}
      crossOrigin="anonymous"
      config={{
        file: {
          attributes: {
            controlsList: "nofullscreen",
          },
        },
      }}
    />
  );
}
