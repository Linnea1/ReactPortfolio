import { useState } from "react";
import contactImage from "../assets/images/contact.png";
import ContactForm from "../components/common/ContactForm";
import "./Contact.css";

function Contact() {
  const [emailCopied, setEmailCopied] = useState(false);

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("linnea.a.14@gmail.com");
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  return (
    <div className="page">
      <div className="page-content">
        <h1>Bring ideas to reality</h1>
        <div className="contact">
          <div className="text-container">
            <div className="status-indicator">
              <div className="status-dot"></div>
              <p className="status-text">
                open for a chit chat
              </p>
            </div>
            
            
            <div className="contact-info">
              <div className="contact-item-wrapper">
                <div className="contact-item-with-copy">
                  <div className="detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                      <polyline points="22,6 12,13 2,6"></polyline>
                    </svg>
                  </div>
                  <p>linnea.a.14@gmail.com</p>
                  <button 
                    className="copy-button" 
                    onClick={copyEmailToClipboard}
                    title="Copy email to clipboard"
                  >
                    {emailCopied ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                      </svg>
                    )}
                  </button>
                  {emailCopied && <span className="copied-tooltip">Copied!</span>}
                </div>
              </div>
              <div className="contact-item-wrapper">
                <div className="contact-item-with-copy">
                  <div className="detail-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                  </div>
                  <p>+46 769 79 97 12</p>
                </div>
              </div>
             
            </div>
             <ContactForm />
          </div>
          <div className="image-container">
            <img src={contactImage} alt="Contact" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
