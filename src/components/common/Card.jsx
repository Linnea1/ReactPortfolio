import React, { useState } from "react";
import Modal from "./Modal.jsx";
import Carousel from "./Carousel.jsx";
import CardSkeleton from "./CardSkeleton.jsx";
import "./Card.css";

const Card = ({ title, description, thumbnail, images, tags }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleCardClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  // Convert URLs in description to clickable links
  const renderDescription = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+)/g;
    const parts = text.split(urlRegex);
    
    return parts.map((part, index) => {
      if (part.match(urlRegex)) {
        return (
          <a 
            key={index} 
            href={part} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-link"
            onClick={(e) => e.stopPropagation()}
          >
            {part}
          </a>
        );
      }
      return part;
    });
  };

  return (
    <>
      {!imageLoaded && <CardSkeleton />}
      <div className="card" onClick={handleCardClick} style={{ display: imageLoaded ? 'block' : 'none' }}>
        <div className="card-preview">
          <div className="card-thumbnail">
            <img 
              src={thumbnail} 
              alt={title}
              onLoad={handleImageLoad}
            />
          </div>

          <h2 className="card-title">{title}</h2>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="modal-header">
          {images && images.length > 0 ? (
            <Carousel images={images} alt={title} />
          ) : (
            <>
              <img src={thumbnail} alt={title} className="modal-thumbnail" />
            </>
          )}
        </div>

        <div className="modal-body">
          <h2 className="modal-title">{title}</h2>
          <p className="modal-description">{renderDescription(description)}</p>

          {tags && tags.length > 0 && (
            <div className="modal-tags">
              <h3>Tools & Skills</h3>
              {tags.map((tag, index) => (
                <span key={index} className="modal-tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Modal>
    </>
  );
};

export default Card;
