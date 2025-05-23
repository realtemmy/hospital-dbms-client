import { Navigate, useLocation } from "react-router";
import useUser from "../../hooks/use-user";

const ProtectedRoute = () => {
  const { data: user, error, isLoading } = useUser();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  if (user?.role === "Patient") {
    return <Navigate to="/patient" />;
  }
};

export default ProtectedRoute;
