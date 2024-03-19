import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase'; // Assurez-vous que le chemin est correct
import '../styles/Profil.scss';

const App = () => {
  const [index, setIndex] = useState(0);
  const [icons, setIcons] = useState([]);
  const text = "Bienvenue sur mon site web.";

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1 <= text.length ? prevIndex + 1 : prevIndex));
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const typedText = text.substring(0, index);
  const cursorVisible = index < text.length;

  useEffect(() => {
    const fetchIcons = async () => {
      try {
        const iconsCollection = collection(db, 'icons');
        const iconsSnapshot = await getDocs(iconsCollection);

        // Convertir les données des images en tableau
        const iconsData = iconsSnapshot.docs.map((doc) => doc.data().images);
        setIcons(iconsData);
      } catch (error) {
        console.error('Erreur lors de la récupération des icônes depuis Firestore:', error.message);
      }
    };

    fetchIcons();
  }, []);

  return (
    <div className="app-container">
      
      <div className="main-section">
        
      
        {icons.map((iconSet, index) => (
          <div key={index} className="icon-set">
            {iconSet.map((icon, subIndex) => (
              <img key={subIndex} src={icon} alt={`Icon ${index + 1}.${subIndex + 1}`} />
            ))}
          </div>
        ))}
      
        
        <div className="typing-text">
          <p>{typedText}</p>
          {cursorVisible && <span className="cursor" />}
        </div>
      </div>
    </div>
  );
};

export default App;