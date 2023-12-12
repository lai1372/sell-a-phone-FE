import { Navigate, Outlet } from "react-router-dom";
export default function ProtectedRoute({ authenticated }) {
  if (!authenticated.isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet/>

}
