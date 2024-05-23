import { Navigate, Outlet } from "react-router-dom";
import toast from "react-hot-toast";
import Spinner from "./loader/Spinner";
import useAuth from "@/hooks/useAuth";

const Layout = () => {
  const { isloggedIn, loading } = useAuth();

  if (loading) {
    return <Spinner />;
  }

  if (!isloggedIn) {
    toast.error("you must be logged in.");
    return <Navigate to="/signin" />;
  }

  return (
    <div className="container mt-10">
      {" "}
      <Outlet />
    </div>
  );
};

export default Layout;
