import { useState, useRef } from "react";
import RomeVideo from "../../../../public/Video/Rome in 4K.mp4";

const Trips = () => {
  const [showPlayButton, setShowPlayButton] = useState(true);
  const videoRef = useRef(null);

  const handleClick = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setShowPlayButton(false);
    } else {
      videoRef.current.pause();
      setShowPlayButton(true);
    }
  };

  return (
    <div className="w-[400px] md:w-[800px] lg:w-[1200px] mx-auto lg:pt-20">
      <h2 className="text-4xl font-medium py-8">Watch Our Memorable Trips</h2>
      <div className="relative pt-10" onClick={handleClick}>
        <video ref={videoRef} src={RomeVideo} className="w-full" muted ></video>
        {showPlayButton && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 rounded-full p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                fill="white"
              >
                <path d="M3 22v-20l18 10-18 10z" />
              </svg>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trips;
