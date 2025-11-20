import { useContext, useEffect } from 'react';
import type { FC } from 'react';
import { AuthContext } from './AuthContext';

type ProtectedRouteProps = {
  rolesRequis: Array<'admin' | 'user' | 'guest'>;
  Component: FC;
};

const ProtectedRoute: FC<ProtectedRouteProps> = ({ rolesRequis, Component }) => {
  const { isAuthenticated, userRole } = useContext(AuthContext);

  useEffect(() => {
    if (!isAuthenticated) {
      window.history.pushState({}, '', '/login');
      window.dispatchEvent(new Event('popstate'));
    } else if (!rolesRequis.includes(userRole!)) {
      window.history.pushState({}, '', '/forbidden');
      window.dispatchEvent(new Event('popstate'));
    }
  }, [isAuthenticated, userRole]);

  if (!isAuthenticated || !rolesRequis.includes(userRole!)) {
    return null;
  }

  return <Component />;
};

export default ProtectedRoute;
