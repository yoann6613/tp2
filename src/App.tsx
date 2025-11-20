import { Routes, Route } from "react-router-dom";
import PageConnexion from "./PageConnexion";
import UsersPage from "./UsersPage";
import ForbiddenPage from "./ForbiddenPage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageConnexion />} />
      <Route path="/login" element={<PageConnexion />} />

      <Route
        path="/users"
        element={
          <ProtectedRoute rolesRequis={["admin", "user"]}>
            <UsersPage />
          </ProtectedRoute>
        }
      />

      <Route path="/forbidden" element={<ForbiddenPage />} />
      <Route path="*" element={<h2>Page non trouvée</h2>} />
    </Routes>
  );
}

export default App;
