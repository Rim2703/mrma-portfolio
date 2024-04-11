import { useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Footer from "./Components/Footer/Footer";
import VideoPlayer from "./Components/VideoPlayer/VideoPlayer";
import Register from "./Components/registerForm/Register";
import Terms_and_services from "./Components/Testimonials/terms&conditions/terms_and_services.jsx";

const App = () => {
  const [playState, setPlayState] = useState(false);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register-user" element={<Register />} />
        <Route path="/terms-of-services" element={<Terms_and_services />} />
      </Routes>
      <Footer />
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};

export default App;
