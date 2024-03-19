import React, { useState } from 'react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { addDoc, collection } from 'firebase/firestore';
import { db, auth } from '../firebase'; // Assurez-vous que le chemin est correct

const AddProjectForm = () => {
  const [titre, setTitle] = useState('');
  const [cover, setCover] = useState(null);
  const [description, setDescription] = useState('');
  const [images, setImages] = useState(Array(4).fill(null));

  const handleCoverChange = (e) => {
    const file = e.target.files[0];
    setCover(file);
  };

  const handleImageChange = (index, e) => {
    const file = e.target.files[0];
    const newImages = [...images];
    newImages[index] = file;
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Étape 1: Télécharger la couverture (cover) dans Storage
    const storage = getStorage();
    const coverRef = ref(storage, `projects/${auth.currentUser.uid}_${titre}/cover`);

    try {
      await uploadBytes(coverRef, cover);
      const coverURL = await getDownloadURL(coverRef);

      // Étape 2: Télécharger les images dans Storage
      const imageUrls = await Promise.all(images.map(async (image, index) => {
        if (image) {
          const imageRef = ref(storage, `projects/${auth.currentUser.uid}_${titre}/image_${index}`);
          await uploadBytes(imageRef, image);
          return await getDownloadURL(imageRef);
        }
        return null;
      }));

      // Étape 3: Ajouter le projet avec les détails dans Firestore
      const projectData = {
        titre,
        cover: coverURL,
        description,
        images: imageUrls,
      };

      const projectsCollection = collection(db, 'projets');
      await addDoc(projectsCollection, projectData);
      console.log('Projet ajouté avec succès à Firestore');
    } catch (error) {
      console.error('Erreur lors du téléchargement ou de l\'ajout du projet :', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Titre:
        <input type="text" value={titre} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label>
        Couverture:
        <input type="file" accept="image/*" onChange={handleCoverChange} />
      </label>
      <label>
        Description:
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
      </label>
      <label>
        Images:
        {images.map((image, index) => (
          <div key={index}>
            <input type="file" accept="image/*" onChange={(e) => handleImageChange(index, e)} />
          </div>
        ))}
      </label>
      <button type="submit">Ajouter le projet</button>
    </form>
  );
};

export default AddProjectForm;