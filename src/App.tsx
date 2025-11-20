import React from 'react';
import { AuthProvider } from './AuthContext';
import { Router } from './Router';
import PageConnexion from './PageConnexion';
import UsersPage from './UsersPage';

const routes = {
  '/': PageConnexion,
  '/login': PageConnexion,
  '/users': UsersPage,
  '/404': () => <h2>Page non trouvée</h2>,
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <Router routes={routes} />
    </AuthProvider>
  );
};

export default App;
