import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../../firebase'; 
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import '../../styles/Projets.scss';

const Projets = () => {
  const [projets, setProjets] = useState([]);
  const [selectedProjet, setSelectedProjet] = useState(null); // Nouvel état pour stocker les détails du projet sélectionné
  const [isModalOpen, setModalOpen] = useState(false); // État pour contrôler l'ouverture/fermeture de la modale

  useEffect(() => {
    const fetchProjets = async () => {
      try {
        // Récupère tous les documents de la collection "projets"
        const projetsCollection = collection(db, 'projets');
        const projetsSnapshot = await getDocs(projetsCollection);

        // Mappe les données des projets
        const projetsData = projetsSnapshot.docs.map((doc) => {
            const projetData = { id: doc.id, ...doc.data() };
            console.log('Titre du projet:', projetData.titre);
            
            return projetData;
          });

        // Met à jour le state avec les données des projets
        setProjets(projetsData);
        
        console.log(projetsData)
      } catch (error) {
        console.error('Erreur lors de la récupération des projets depuis Firestore:', error.message);
      }
    };

    // Appelle la fonction pour récupérer les projets
    fetchProjets();
  }, []);

  // Fonction pour ouvrir la modale avec les détails du projet sélectionné
  const openModal = (projet) => {
    setSelectedProjet(projet);
    setModalOpen(true);
  };

  // Fonction pour fermer la modale
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="styleProjets">
      <h1>Vous trouverez mes projets divers et variés ici, </h1>
      <div className="groupCard">
        {projets.map((projet) => (
          <div className="card-container" key={projet.id} onClick={()=> openModal(projet)}>
          <Card 
          
          title={projet.titre}
          cover={projet.cover}
          
          />
        </div>
        ))}
      {isModalOpen && selectedProjet && (
        <Modal 
          title={selectedProjet.titre}
          cover={selectedProjet.cover}
          description={selectedProjet.description}
          images={selectedProjet.images}
          code={selectedProjet.code}
          lien={selectedProjet.lien}
          closeModal={closeModal}
        />
      )}
      </div>
    </div>
  );
};

export default Projets;