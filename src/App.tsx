import React from 'react';
import { AuthProvider } from './AuthContext';
import { Router } from './Router';
import PageConnexion from './PageConnexion';
import UsersPage from './UsersPage';
import ForbiddenPage from './ForbiddenPage';
import ProtectedRoute from './ProtectedRoute';

const UsersProtected: React.FC = () => (
  <ProtectedRoute rolesRequis={['admin', 'user']} Component={UsersPage} />
);

const routes = {
  '/': PageConnexion,
  '/login': PageConnexion,
  '/users': UsersProtected,
  '/forbidden': ForbiddenPage,
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
