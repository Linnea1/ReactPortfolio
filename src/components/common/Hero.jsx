import "./Hero.css";
import homeVideo from "../../assets/videos/home.mp4";
import SocialIcons from "./SocialIcons";
import TypewriterText from "./TypewriterText";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h3>Hello, I'm Linnéa Andersson</h3>
        <div className="hero-video-phone">
          <video autoPlay loop muted playsInline className="hero-video-element">
            <source src={homeVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <h1>I Create Websites</h1>
        <div className="hero-typewriter">
          <h1>That are</h1>
          <TypewriterText
            words={["Beautiful", "Functional", "Responsive"]}
          ></TypewriterText>
        </div>

        <p>
          A fresh web developer specialising in creating captivating websites.
          With a knack for the latest tech and a passion for sleek design, I
          craft responsive, engaging sites that bring ideas to life.
        </p>
        <SocialIcons></SocialIcons>
      </div>
      <div className="hero-video">
        <video autoPlay loop muted playsInline className="hero-video-element">
          <source src={homeVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
}

export default Hero;
