import React, { useState, useEffect, useMemo } from 'react';
import frontend from '../../assets/frontend1.webp';
import backend from '../../assets/backend1.webp';
import optimisation from '../../assets/optimisation.webp';
import deploiement from '../../assets/deploiement.webp';
import computer from '../../assets/computer1.jpg';

import browser from '../../assets/browser.png';
import file from '../../assets/file.png';
import search from '../../assets/search.png';
import networking from '../../assets/networking.png';
import '../../styles/Services.scss';

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [textAnimation, setTextAnimation] = useState([]);
  const [animationIndex, setAnimationIndex] = useState(0);

  const servicesData = useMemo(() => [
    { name: 'Front-end', description: ['Technologies côté client', 'ceci est la deuxième ligne de frontend', 'ceci est la troisième ligne de frontend', 'ceci est la quatrième ligne de frontend'] },
    { name: 'Back-end', description: ['Technologies côté serveur', 'ceci est la deuxième ligne de backend', 'ceci est la troisième ligne de backend', 'ceci est la quatrième ligne de backend'] },
    { name: 'Optimisation', description: ['Optimisation des performances', "ceci est la deuxième ligne de d'optimisation", "ceci est la troisième ligne d'optimisation", "ceci est la quatrième ligne d'optimisation"] },
    { name: 'Déploiement', description: ['Processus de mise en production', 'ceci est la deuxième ligne de déploiement', 'ceci est la troisième ligne de déploiement', 'ceci est la quatrième ligne de déploiement'] },
  ], []);

  const getBackgroundImage = (index) => {
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
          <h2>Mes Services</h2>
      <p>Veuillez trouver mes services ci-joints.</p>
         <div className="bloc10">
            <img
              className="image10"
              src={browser}
              alt=""
              onMouseEnter={() => setHoveredIndex(0)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setAnimationIndex(0);
              }}
            />
            <img
              className="image20"
              src={file}
              alt=""
              onMouseEnter={() => setHoveredIndex(1)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setAnimationIndex(0);
              }}
            />
          
          
            <img
              className="image30"
              src={search}
              alt=""
              onMouseEnter={() => setHoveredIndex(2)}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setAnimationIndex(0);
              }}
            />
            <img
              className="image40"
              src={networking}
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
          <img className="laptop" src={computer} alt="" />
          <img className="screen" src={hoveredIndex !== null ? getBackgroundImage(hoveredIndex) : ''} alt="" />
          
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