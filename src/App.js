import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { StateProvider } from "./context/StateContext";
import LoginPage from "./Pages/LoginPage";
import YoutubeLandingPage from "./Pages/YoutubeClone/YoutubeLandingPage";
import YoutubeVideoLandingPage from "./Pages/YoutubeClone/YoutubeVideoLandingPage.js";
import MyPortfolio_1 from "./Pages/MyPortfolio_1.js";

function App() {
  return (
    <StateProvider>
      <Router>
        <Routes>
          <Route path="/loginpage" element={<LoginPage />} />
          <Route path="/" element={<MyPortfolio_1 />} />
          <Route path="/youtube" element={<YoutubeLandingPage />} />

          <Route
            path="/youtube/video/:id"
            element={<YoutubeVideoLandingPage />}
          />
        </Routes>
      </Router>
    </StateProvider>
  );
}

export default App;
