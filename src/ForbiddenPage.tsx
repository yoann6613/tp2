import React from 'react';

const ForbiddenPage: React.FC = () => {
  return (
    <div>
      <h2>403 - Accès refusé</h2>
      <p>Vous n'avez pas le rôle nécessaire pour accéder à cette page.</p>
    </div>
  );
};

export default ForbiddenPage;
