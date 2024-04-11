import React from "react";
import PlaystoreLogo from "../../assets/playstore.png";
import WorkerImage from "../../assets/woker_holding_phone.jpg";
import "./playstore.css";

const AndroidApp = () => {
  return (
    <div className="outer-box">
      <div className="text-box">
        <h1>Book workers from your phone</h1>
        <p>
          Experience the notable working services on your Android/iOS devices in
          this <br />
          revolutionizing era full of technological evolution. With one click,
          choose the <br /> best service at a reasonable price without any
          hurdles.
        </p>
        <div className="playstore-logo">
          <a href="your_link_here" target="_blank" rel="noopener noreferrer">
            <img src={PlaystoreLogo} alt="playstore" />
          </a>
        </div>
      </div>

      <div className="worker-image">
        <img src={WorkerImage} alt="" />
      </div>
    </div>
  );
};

export default AndroidApp;
