import { Navigate, Route, Routes } from "react-router-dom";

// Mock authentication check function
const isAuthenticated = () => {
  return localStorage.getItem("token") !== null;
};

const PrivateRoutes = () => {
  return isAuthenticated() ? <Routes></Routes> : <Navigate to="/login" />;
};

export default PrivateRoutes;
