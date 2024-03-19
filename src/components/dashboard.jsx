// Import des modules nécessaires
import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import '../styles/Dashboard.scss'; // Assurez-vous de créer ce fichier CSS pour styliser votre dashboard
import imageProfil from '../assets/profil.jpg'

// Composant Dashboard
const Dashboard = () => {
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };
  return (
    <div className="dashboard-container">
      <div className="dashboard-desktop">
      {/* Image de profil */}
      <img
        className="profile-image"
        src={imageProfil}
        alt="profil"
      />

      {/* Texte descriptif */}
      <p className="description-text">
        Bienvenue. Je suis Victor Duclos, développeur web passionné.
      </p>

      {/* Liens pour les services, projets et contact */}
      <div className="dashboard-links">
        <Link to="/" className="link-item">
        <div className="liens-desktop">
        <img className="logo-desktop" src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fhome-button.webp?alt=media&token=51aa4ff4-4233-41ae-9f0c-181857b4e206"
        alt="logoHome"/>
        <span>Accueil</span>
        </div>
        </Link>
        <Link to="/mes-services" className="link-item">
        <div className="liens-desktop">
        <img className="logo-desktop" src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fcustomer-service.webp?alt=media&token=f9c2afc6-d1f9-4c00-9332-3cde50645222"
        alt="logoServices"/>
        <span>Services</span>
        </div>
        </Link>
        <Link to="/mes-projets" className="link-item">
        <div className="liens-desktop">
        <img className="logo-desktop" src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Frocket.webp?alt=media&token=b44137b6-a701-460a-ab14-f5440fb933bb"
        alt="logoProjets"/>
        <span>Projets</span>
        </div>
        </Link>
        <Link to="/me-contacter" className="link-item">
        <div className="liens-desktop">
        <img className="logo-desktop" src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fcommunicate.webp?alt=media&token=e9ec07e2-f7cf-43be-9715-c20779c8614f"
        alt="logoContacter"/>
        <span>Contacter</span>
        </div>
        </Link>  
      </div>
      <div className="lock">
      <Link to="/modifications" className="link-item">
         <img className="logo-desktop" src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fbroken.webp?alt=media&token=d6b24c75-5dff-4aee-8516-ee6ed70a91f8"
        alt="logoLock"/> 
        </Link></div>
      </div>
      <div className="dashboard-mobile">
      <img
        className="profile-image"
        src={imageProfil}
        alt="profil"
      />
      <p className="description-text">
      Victor Duclos, développeur web.
      </p>
      <div className={`collapseButton `}>
      <div className="buttonContainer">
        
        <img
          src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fmenu-bar.webp?alt=media&token=4a101917-b175-4389-b7bc-a25543d7f35e"
          alt="menu"
          className={`rotateImage ${isCollapsed ? 'rotateImage--collapsed' : 'rotateImage--expanded'}`}
          onClick={handleToggle}
        />
      </div>

      {!isCollapsed && (
        <div className={`collapseContent ${!isCollapsed ? 'open' : ''}`}>
          <div className="link-mobile">
            <div className="liens-mobile">
        <img className="logo-mobile" src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fhome-button.webp?alt=media&token=51aa4ff4-4233-41ae-9f0c-181857b4e206"
        alt="home"/>
        <Link to="/" className="link-item">Accueil</Link>
            </div>
            <div className="liens-mobile">
        <img className="logo-mobile" src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fcustomer-service.webp?alt=media&token=f9c2afc6-d1f9-4c00-9332-3cde50645222"
        alt="services"/>
        <Link to="/mes-services" className="link-item">Mes Services</Link>
            </div>
            <div className="liens-mobile">
        <img className="logo-mobile" src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Frocket.webp?alt=media&token=b44137b6-a701-460a-ab14-f5440fb933bb"
        alt="projets"/>
        <Link to="/mes-projets" className="link-item">Mes projets</Link>
            </div>
            <div className="liens-mobile">
        <img className="logo-mobile" src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fcommunicate.webp?alt=media&token=e9ec07e2-f7cf-43be-9715-c20779c8614f"
        alt="contact"/>
        <Link to="/me-contacter" className="link-item">Me contacter</Link>
            </div>
          </div>
        </div>
      )}
    </div>

      </div>
    </div>
  );
};

export default Dashboard;