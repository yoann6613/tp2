import { useContext } from "react";
import type { ReactNode } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";

type Props = {
  rolesRequis: string[];
  children: ReactNode;
};

export default function ProtectedRoute({ rolesRequis, children }: Props) {
  const { isAuthenticated, userRole } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  if (!rolesRequis.includes(userRole!)) {
    return <Navigate to="/forbidden" replace />;
  }

  return <>{children}</>;
}
