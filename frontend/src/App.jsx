import React, { useState } from "react";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  const [page, setPage] = useState("login");

  return (
    <>
      {page === "login" && (
        <Login
          goToRegister={() => setPage("register")}
        />
      )}

      {page === "register" && (
        <Register
          goToLogin={() => setPage("login")}
        />
      )}
    </>
  );
}

export default App;
