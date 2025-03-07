import React, { useState } from "react";

const Login = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // Hardcoded credentials for simulation -----> Will need to connect database for this
  const validCredentials = {
    user: "user123",
    password: "password123",
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate authentication -------> need to add register functionality
    if (user === validCredentials.user && password === validCredentials.password) {
      alert("Login successful!");
      setError("");
    } else {
      setError("Invalid user or password");
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit} style={styles.form}>

        <input
          type="user"
          placeholder="User"
          value={user}
          onChange={(e) => setUser(e.target.value)}
          style={styles.input}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />

        <button type="submit" style={styles.button}>
          Login
        </button>

      </form>
      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

const styles = {
  container: { textAlign: "center", margin: "20px auto" },
  form: { display: "inline-block", textAlign: "left" },
  input: { margin: "10px 0", padding: "8px", width: "100%", boxSizing: "border-box" },
  button: { padding: "10px 20px", backgroundColor: "#007BFF", color: "#fff", border: "none", cursor: "pointer" },
  error: { color: "red", fontWeight: "bold" },
};

export default Login