import React, { useState, useEffect } from "react";

import Login from "./pages/Login";
import Register from "./pages/Register";
import PermissionScreen from "./pages/PermissionScreen";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("loading");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const locationPermission = localStorage.getItem("locationPermission");

    if (!token) {
      setPage("login");
    } else if (!locationPermission) {
      setPage("permissions");
    } else {
      setPage("dashboard");
    }
  }, []);

  if (page === "loading") return null;

  return (
    <>
      {page === "login" && (
        <Login
          goToRegister={() => setPage("register")}
          onLoginSuccess={() => setPage("permissions")}
        />
      )}

      {page === "register" && (
        <Register
          goToLogin={() => setPage("login")}
          onRegisterSuccess={() => setPage("permissions")}
        />
      )}

      {page === "permissions" && (
        <PermissionScreen
          onPermissionComplete={() => setPage("dashboard")}
        />
      )}

      {page === "dashboard" && <Dashboard />}
    </>
  );
}

export default App;
