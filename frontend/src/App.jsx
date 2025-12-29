import React, { useState, useEffect } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";

function App() {
  const [page, setPage] = useState("loading");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setPage("dashboard");
    } else {
      setPage("login");
    }
  }, []);

  if (page === "loading") return null;

  return (
    <>
      {page === "login" && (
        <Login
          goToRegister={() => setPage("register")}
          onLoginSuccess={() => setPage("dashboard")}
        />
      )}

      {page === "register" && (
        <Register
          goToLogin={() => setPage("login")}
          onRegisterSuccess={() => setPage("dashboard")}
        />
      )}

      {page === "dashboard" && <Dashboard />}
    </>
  );
}

export default App;
