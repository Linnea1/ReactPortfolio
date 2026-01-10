import Hero from "../components/common/Hero";
import DownloadCV from "../components/common/DownloadCV";
import { useRef, useEffect } from "react";
import aboutMeImage from "../assets/images/aboutMe.png";
import "./Home.css";

function Home() {
  const aboutRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    // Add class to body for home page styling
    document.body.classList.add('on-home-page');
    return () => {
      document.body.classList.remove('on-home-page');
    };
  }, []);

  useEffect(() => {
    const handleScroll = (e) => {
      const heroBottom = heroRef.current?.getBoundingClientRect().bottom || 0;
      const aboutTop = aboutRef.current?.getBoundingClientRect().top || 0;
      const scrollY = window.scrollY;
      const heroHeight = heroRef.current?.offsetHeight || 0;
      
      // If user scrolls down while in hero section, snap to about section
      if (heroBottom > 0 && heroBottom < window.innerHeight && e.deltaY > 0) {
        e.preventDefault();
        aboutRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      
      // If user scrolls up while near the top of about section, snap back to top
      if (scrollY > heroHeight * 0.5 && scrollY < heroHeight + 100 && e.deltaY < 0) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };

    window.addEventListener('wheel', handleScroll, { passive: false });
    return () => window.removeEventListener('wheel', handleScroll);
  }, []);

  return (
    <div className="home-page">
      <div className="page-content" ref={heroRef}>
        <Hero></Hero>
      </div>
      <div className="about-section-wrapper">
        <div className="scroll-arrow">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
        </div>
        <section ref={aboutRef}>
          <div className="page-content">
            <h1 className="about-me-heading">About Me</h1>
            <div className="about-me-grid">
              <div className="about-me-image">
                <img src={aboutMeImage} alt="About Me" />
              </div>
              <div className="about-me-text">
                <div className="about-intro">
                 
                 
                </div>
                
                <div className="about-details">
                  <div className="detail-item">
                    <div className="detail-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6"></polyline>
                        <polyline points="8 6 2 12 8 18"></polyline>
                      </svg>
                    </div>
                    <p>Strong interest in both web design and full-stack development, focusing on building visually engaging websites with high functionality.</p>
                  </div>
                  
                  <div className="detail-item">
                    <div className="detail-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                        <path d="M6 12v5c3 3 9 3 12 0v-5"></path>
                      </svg>
                    </div>
                    <p>Bachelor's degree in Media Technology, specialising in web-based design and development.</p>
                  </div>
                  
                  <div className="detail-item">
                    <div className="detail-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <polyline points="12 6 12 12 16 14"></polyline>
                      </svg>
                    </div>
                    <p>Currently working on personal projects, volunteer work, and continuing to expand skills through further study.</p>
                  </div>
                </div>
                
                <DownloadCV />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Home;
