import React from "react";
import YoutubeVideoPage from "./YoutubeVideoPage";
import { AppContext } from "../../context/ContextAPI";
const YoutubeVideoLandingPage = () => {
  return (
    <AppContext>
      <YoutubeVideoPage />
    </AppContext>
  );
};

export default YoutubeVideoLandingPage;
