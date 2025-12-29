import React, { useState } from "react";

function Login({ goToRegister }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });

    const data = await res.json();

    if (!res.ok) {
      alert(data.message || "Login failed");
      return;
    }

    // ✅ JWT save
    localStorage.setItem("token", data.token);

    alert("Login Successful ✅");

    // 👉 NEXT STEP me yaha map page open karenge
    console.log("TOKEN:", data.token);

  } catch (err) {
    alert("Server error");
    console.error(err);
  }
};

  const handleForgotPassword = () => {
    alert("Forgot Password flow next step me add hoga 🔒");
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

      {/* Forgot Password */}
      <p style={styles.forgot} onClick={handleForgotPassword}>
        Forgot Password?
      </p>

      {/* Register Switch */}
      <p style={styles.switchText}>
        Don’t have an account?{" "}
        <span style={styles.link} onClick={goToRegister}>
          Register
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
  },
  forgot: {
    marginTop: "10px",
    fontSize: "13px",
    color: "#38bdf8",
    cursor: "pointer"
  },
  switchText: {
    marginTop: "14px",
    fontSize: "14px"
  },
  link: {
    color: "#38bdf8",
    cursor: "pointer"
  }
};

export default Login;
