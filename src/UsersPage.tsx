import React, { useContext } from 'react';
import { AuthContext } from './AuthContext';

const UsersPage = () => {
  const { isAuthenticated, userRole, logout } = useContext(AuthContext);

  if (!isAuthenticated) {
    window.history.pushState({}, '', '/login');
    window.dispatchEvent(new Event('popstate'));
    return null;
  }

  return (
    <div>
      <h2>Bienvenue ! Votre rôle est : {userRole}</h2>
      <button onClick={logout}>Se déconnecter</button>
    </div>
  );
};

export default UsersPage;
