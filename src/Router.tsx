import { useState, useEffect } from 'react';
import type { FC } from 'react';

type Routes = {
  [key: string]: FC;
};

type Props = {
  routes: Routes;
};

export const Router: FC<Props> = ({ routes }) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onLocationChange = () => setCurrentPath(window.location.pathname);
    window.addEventListener('popstate', onLocationChange);
    return () => window.removeEventListener('popstate', onLocationChange);
  }, []);

  useEffect(() => {
    if (currentPath === '/') {
      window.history.replaceState({}, '', '/login');
      setCurrentPath('/login');
    }
  }, [currentPath]);

  const Component = routes[currentPath] || routes['/404'];
  return <Component />;
};
