import "./App.css";
import { useState, useEffect } from "react";
import DashboardView from "./Views/DashboardView";
import Register from "./Views/Register";
import LogIn from "./Views/LogIn";
import { validateTokenRequest } from "./api/authRequests";
import { Routes, Route, Navigate } from "react-router-dom";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const authUser = (boolean) => {
    return setIsLoggedIn(boolean);
  };

  const PrivateRoute = ({ children }) => {
    return isLoggedIn ? children : <Navigate to="/login" />;
  };
  const PublicRoute = ({ children }) => {
    return isLoggedIn ? <Navigate to="/dashboard" /> : children;
  };

  useEffect(() => {
    validateTokenRequest().then((boolean) => setIsLoggedIn(boolean));
  }, []);

  return (
    <Routes>
      <Route
        path="/login"
        element={
          <PublicRoute>
            <LogIn authorize={authUser} />
          </PublicRoute>
        }
      />
      <Route
        path="/register"
        element={
          <PublicRoute>
            <Register authorize={authUser} />
          </PublicRoute>
        }
      />
      <Route
        path="/dashboard"
        element={
          <PrivateRoute>
            <DashboardView authorize={authUser} />
          </PrivateRoute>
        }
      />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
