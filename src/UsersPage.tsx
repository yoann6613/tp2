import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';

type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

const UsersPage: React.FC = () => {
  const { isAuthenticated, userRole, logout } = useContext(AuthContext);

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  if (!isAuthenticated) {
    window.history.pushState({}, '', '/login');
    window.dispatchEvent(new Event('popstate'));
    return null;
  }

  useEffect(() => {
    fetch('http://localhost:8000/users')
      .then((res) => res.json())
      .then((data: User[]) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur API :", error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Bienvenue ! Votre rôle est : {userRole}</h2>

      <button onClick={logout} style={{ marginBottom: "20px" }}>
        Se déconnecter
      </button>

      <h3>Liste des utilisateurs :</h3>

      {loading ? (
        <p>Chargement...</p>
      ) : (
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid black", padding: "8px" }}>ID</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Nom</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Email</th>
              <th style={{ border: "1px solid black", padding: "8px" }}>Âge</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u) => (
              <tr key={u.id}>
                <td style={{ border: "1px solid black", padding: "8px" }}>{u.id}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{u.name}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{u.email}</td>
                <td style={{ border: "1px solid black", padding: "8px" }}>{u.age}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UsersPage;
