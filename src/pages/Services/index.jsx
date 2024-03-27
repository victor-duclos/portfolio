import React, { useState, useEffect, useMemo } from 'react';
import '../../styles/Services.scss';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [textAnimation, setTextAnimation] = useState([]);
  const [animationIndex, setAnimationIndex] = useState(0);

  const servicesData = useMemo(() => [
    { name: 'Front-end', description: ['Création site vitrine', 'Application web React', 'Interface utilisateur', 'Connexion aux API'] },
    { name: 'Back-end', description: ["Création d'une API", 'Gestion base de données', 'Protection des données', 'Création base de données'] },
    { name: 'Optimisation', description: ['Référencement SEO', "Refonte du site", "Allègement du code", "Correction des bugs"] },
    { name: 'Déploiement', description: ['Production du site', 'Mise à jour du site', 'Suivi après déploiement', 'Maintenance du site'] },
  ], []);

  const getBackgroundImage = (index) => {
    const frontend="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Ffrontend1.webp?alt=media&token=b6e8b2fa-b91e-4abb-b821-97760638ef27";
    const backend="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fbackend1.webp?alt=media&token=da0531f7-5e92-41a4-abbe-e19326d223f9";
    const optimisation="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Foptimisation.webp?alt=media&token=1255df81-20ad-477b-a55e-95493a9d36ba";
    const deploiement="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fdeploiement.webp?alt=media&token=fdcab140-d283-4096-99e7-a4a6fd91350c";
    
    switch (index) {
      case 0:
        return frontend;
      case 1:
        return backend;
      case 2:
        return optimisation;
      case 3:
        return deploiement;
      default:
        return '';
    }
  };

  useEffect(() => {
    if (hoveredIndex !== null) {
      const lines = servicesData[hoveredIndex].description;
      const animation = lines.map((line, index) => ({
        line,
        visibleChars: 0,
        isComplete: false,
      }));
      setTextAnimation(animation);

      const intervalId = setInterval(() => {
        setTextAnimation((prevState) => {
          const updatedAnimation = [...prevState];

          const allLinesComplete = updatedAnimation.every((line) => line.isComplete);

          if (allLinesComplete) {
            setAnimationIndex(0);
            return animation;
          }

          updatedAnimation.forEach((line) => {
            if (line.visibleChars < line.line.length) {
              line.visibleChars += 1;
            } else if (!line.isComplete) {
              line.isComplete = true;
            }
          });

          return updatedAnimation;
        });
      }, 100);

      return () => clearInterval(intervalId);
    }
  }, [hoveredIndex, animationIndex, servicesData]);

  return (
    <div className="styleContacter" >
      
      <div className="mappingContacter">
        <div className="conteneurContacter">
          <div className="titreServices">
          <h2>Mes Services</h2>
      <p>Naviguez entre les icones pour découvrir mes services.</p>
      <span>En tant que développeur full-stack je vous propose plusieurs solutions en fonctions de vos besoins!</span>
          </div>
          <div className="bloc20">
            <div className="conteneur-bloc20">
          <img
              className="image10"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fbrowser.webp?alt=media&token=bea34a00-832f-413f-af9d-a3dba4e3287f"
              alt="frontend"/>
              <h2>Front-end</h2>
              <span>Création site vitrine</span>
              <span>Application web React</span>
              <span>Interface utilisateur</span>
              <span>Connexion aux API</span>
            </div>
            <div className="conteneur-bloc20">
            <img
              className="image20"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Ffile.webp?alt=media&token=75294ca6-710c-49f9-818f-7265bfcf00f9"
              alt="backend"/>
              <h2>Back-end</h2>
              <span>Création d'une API</span> 
              <span>Gestion base de données</span> 
              <span>Protection des données</span> 
              <span>Création base de données</span>
              </div>
          
            <div className="conteneur-bloc20">
            <img
              className="image30"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fsearch.webp?alt=media&token=ba826292-ad6b-4160-b6df-7f62b9d2a93a"
              alt="optimisation"/>
              <h2>Optimisation</h2>
              <span>Référencement SEO</span>
              <span>Refonte du site</span>
              <span>Allègement du code</span>
              <span>Correction des bugs</span>
            </div>

            <div className="conteneur-bloc20">
            <img
              className="image40"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fnetworking.webp?alt=media&token=0c86e20a-3271-47ce-a864-4fb9d03a577b"
              alt="déploiement"/>
              <h2>Déploiement</h2>
              <span>Production du site</span>
              <span>Mise à jour du site</span>
              <span>Suivi après déploiement</span>
              <span>Maintenance du site</span>
            </div>
          </div>
         <div className="bloc10">
            <img
              className="image10"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fbrowser.webp?alt=media&token=bea34a00-832f-413f-af9d-a3dba4e3287f"
              alt=""
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setAnimationIndex(0);
              }}
            />
            <img
              className="image20"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Ffile.webp?alt=media&token=75294ca6-710c-49f9-818f-7265bfcf00f9"
              alt=""
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setAnimationIndex(0);
              }}
            />
          
          
            <img
              className="image30"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fsearch.webp?alt=media&token=ba826292-ad6b-4160-b6df-7f62b9d2a93a"
              alt=""
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setAnimationIndex(0);
              }}
            />
            <img
              className="image40"
              src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fnetworking.webp?alt=media&token=0c86e20a-3271-47ce-a864-4fb9d03a577b"
              alt=""
              onMouseEnter={() => setHoveredIndex(3)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setAnimationIndex(0);
              }}
            />
          </div> 
        </div>
        <div className="computerContacter">
          <img className="laptop" src="https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fcomputer1.webp?alt=media&token=a142196b-75fc-4327-bcdc-a08de0e01d29" alt="" />
          <img className="screen" src={hoveredIndex !== null ? getBackgroundImage(hoveredIndex) : "https://firebasestorage.googleapis.com/v0/b/portfolio-ca391.appspot.com/o/divers%2Fcomputer1.webp?alt=media&token=a142196b-75fc-4327-bcdc-a08de0e01d29"} alt="" />
          
          <div className="texteContacter" >
            {hoveredIndex !== null && (
              
              <div className="descriptifContacter">
                <div className="screenTitre">
                <h3>{servicesData[hoveredIndex].name}</h3></div>
                <div className="positionTexteServices">
                {textAnimation.map((line, index) => (
                  
                  <p className="styleTexteServices" key={index}>{line.line.substring(0, line.visibleChars) + (line.visibleChars < line.line.length ? '|' : '')}</p>
                  
                ))}</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;