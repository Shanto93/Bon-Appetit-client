import { useState, useRef } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { GoMute, GoUnmute } from "react-icons/go";

import bannerContent from "./../../../assets/home/BannerVideo.mp4";
import "./banner.css";

const Banner = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="videoContainer">
      <div className="overlay max-w-screen-lg scale-animation"></div>
      <video
        src={bannerContent}
        autoPlay
        loop
        muted={isMuted}
        ref={videoRef}
      ></video>
      <div className="content max-w-screen-lg gap-y-4">
        {/* <button className="neon absolute bottom-5 bg-orange-600 px-3 py-2 rounded-lg right-5 hover:bg-green-600 text-white scale-animation" onClick={toggleMute}>
          {isMuted ? "Unmute" : "Mute"}
        </button> */}


        <button className="absolute bottom-5 right-5 btn-sm btn-outline mt-4 border-0 border-b-4 rounded-lg border-orange-500 hover:border-orange-500 bg-black text-white" onClick={toggleMute}>
        {isMuted ? <GoUnmute className="text-lg md:text-3xl hover:text-orange-600 hover:border-orange-600" /> : <GoMute className="text-lg md:text-3xl hover:text-orange-700 hover:border-orange-600"/>}
          </button>


      </div>
    </div>
  );
};

export default Banner;
