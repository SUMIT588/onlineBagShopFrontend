import { Route, Routes } from "react-router-dom";

import Login from "../components/pages/auth/Login";
import NotFound from "../components/pages/NotFound";
import React from "react";
import Register from "../components/pages/auth/Register";

function PublicRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default PublicRoutes;
