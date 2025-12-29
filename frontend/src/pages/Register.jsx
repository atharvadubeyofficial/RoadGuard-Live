import React, { useState } from "react";

function Register({ goToLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Register Data:", name, email, password);
  };

  return (
    <div style={styles.container}>
      <h2>Create Account</h2>

      <form onSubmit={handleRegister} style={styles.form}>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          style={styles.input}
        />

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
          Register
        </button>
      </form>

      <p style={styles.switchText}>
        Already have an account?{" "}
        <span style={styles.link} onClick={goToLogin}>
          Login
        </span>
      </p>
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
    background: "#020617",
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
    background: "#16a34a",
    color: "#fff",
    cursor: "pointer"
  },
  switchText: {
    marginTop: "12px",
    fontSize: "14px"
  },
  link: {
    color: "#38bdf8",
    cursor: "pointer"
  }
};

export default Register;
