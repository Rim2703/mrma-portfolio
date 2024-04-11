import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";
import bgVideo from "/bg-video.mp4"; // Import your video file

const Hero = () => {
  return (
    <div className="hero container">
      <video autoPlay muted loop className="video-background">
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="hero-content">
        <div className="hero-text">
          <h1>Connecting skilled workers with employers</h1>
          <p>
            Discover MERA ROJGAR MERA ADHIKAR - the easy way to hire or get
            hired as a reliable daily wage worker, all in one place.
          </p>
          <button className="btn">
            Register Now
            <img src={dark_arrow} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
