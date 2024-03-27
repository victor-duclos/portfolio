import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Modal.scss'

const Modal = ({ title, code, cover, description, images , lien , closeModal }) => {
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
        <img className="logoCover" src={cover} alt={`Cover for ${title}`} />
        <div className="modal-description">
        <p>{description}</p>
        
        <div className="modal-github">
        <p>Lien GitHub :   </p>
        <Link to={lien}>
        <img className="logoModal" src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fgithub-icon.webp?alt=media&token=754725c9-1920-40aa-9d51-bdb6ab62bf45"
                alt="github"/>
        </Link></div>
        </div>
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