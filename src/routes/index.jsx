import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/*" element={<PublicRoutes />} />

        {/* Private Routes (Protected) */}
        <Route path="/dashboard/*" element={<PrivateRoutes />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
