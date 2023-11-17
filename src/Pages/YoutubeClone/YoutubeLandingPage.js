import React, { useContext, useEffect } from "react";

import YoutubeNavBar from "../../Components/YoutubeClone/YoutubeNavBar.js";
import LeftNavBar from "../../Components/YoutubeClone/YoutubeLeftNavBar.js";
import { AppContext } from "../../context/ContextAPI.js";
import YoutubeFeed from "../../Components/YoutubeClone/YoutubeFeed.js";

const YoutubeLandingPage = () => {
  return (
    <AppContext>
      <div className="min-h-screen min-w-100% bg-[#0F0F0F]">
        <YoutubeNavBar />
        <div className="flex flex-row min-h-[calc(100vh-56px)] w-100%">
          <div className=" md:sticky md:top-0 max-h-[calc(100vh-56px)]">
            <LeftNavBar />
          </div>
          <YoutubeFeed />
        </div>
      </div>
    </AppContext>
  );
};

export default YoutubeLandingPage;
