import React from 'react';
import '../styles/Modal.scss'

const Modal = ({ title, code, cover, description, images , closeModal }) => {
  const handleOverlayClick = (e) => {
    // Fermez la modale uniquement si l'utilisateur clique sur l'overlay (élément avec la classe "modal")
    if (e.target.classList.contains('modal')) {
      closeModal();
    }
  };
  return (
    <div className="modal" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>{title}</h2>
        <div className="modal-text">
        <img src={cover} alt={`Cover for ${title}`} />
        <p>{description}</p>
        </div>
        <h3>Images du projet</h3>
        {images && images.length > 0 && (
          <div className="project-images">
            
            {images.map((image, index) => (
              <img className={code+index} key={index} src={image} alt={`imag-${index + 1}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;