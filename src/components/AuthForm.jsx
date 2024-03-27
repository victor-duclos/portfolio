import React, { useState } from 'react';

const AuthForm = ({ onSubmit, formType }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Identifiant:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <label>
        Mot de passe:
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </label>
      <button type="submit">{formType === 'signup' ? 'S\'inscrire' : 'Se connecter'}</button>
    </form>
  );
};

export default AuthForm;