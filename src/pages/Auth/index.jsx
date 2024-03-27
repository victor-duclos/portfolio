import React from 'react';
import Auth from '../../components/Auth'; 
import AuthForm from '../../components/AuthForm';
import AddProjectForm from '../../components/AddProjectForm';
import '../../styles/Auth.scss';

const Authentification = () => {
    return (
      <Auth>
        {({ user, signIn, signOut }) => (
          <div className="styleAuth">
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
                <p>Cette page m'est réservée pour pouvoir ajouter de nouveaux projets ainsi que les modifier.</p>
                <AuthForm onSubmit={signIn} formType="signin" />
              </div>
            )}
            
          </div>
        )}
      </Auth>
    );
  };
  
  export default Authentification;