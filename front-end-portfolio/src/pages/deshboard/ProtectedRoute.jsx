import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../provider/AuthProvider";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return (
      <div className="flex min-h-[50vh] items-center justify-center pt-16">
        <span className="loading loading-spinner loading-lg text-[#2B9C7F]" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/deshboard/login" replace state={{ from: location.pathname }} />;
  }

  return children;
};

export default ProtectedRoute;
