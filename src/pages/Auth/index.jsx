import React from 'react';
import Auth from '../../components/Auth'; // Assurez-vous que le chemin est correct
import AuthForm from '../../components/AuthForm';
import AddProjectForm from '../../components/AddProjectForm';


const Authentification = () => {
    return (
      <Auth>
        {({ user, signIn, signUp, signOut }) => (
          <div>
            {user ? (
              <div>
                <p>Bienvenue, {user.displayName || user.email}!</p>
                <button onClick={signOut}>Se déconnecter</button>

                {/* Formulaire d'ajout de projet */}
              <h2>Ajouter un projet</h2>
              <AddProjectForm onSubmit={(projectData) => console.log(projectData)} />
              </div>
            ) : (
              <div>
                <p>Veuillez vous connecter</p>
                
                {/* Formulaire d'inscription */}
                <h2>Inscription</h2>
                <AuthForm onSubmit={signUp} formType="signup" />
  
                {/* Formulaire de connexion */}
                <h2>Connexion</h2>
                <AuthForm onSubmit={signIn} formType="signin" />
              </div>
            )}
            
          </div>
        )}
      </Auth>
    );
  };
  
  export default Authentification;