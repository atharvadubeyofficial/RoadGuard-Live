import React, { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data:", email, password);
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>

      <form onSubmit={handleLogin} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "#fff"
  },
  form: {
    width: "280px",
    display: "flex",
    flexDirection: "column",
    gap: "12px"
  },
  input: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    outline: "none"
  },
  button: {
    padding: "10px",
    borderRadius: "6px",
    border: "none",
    background: "#2563eb",
    color: "#fff",
    cursor: "pointer"
  }
};

export default Login;
