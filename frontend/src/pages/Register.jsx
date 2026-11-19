import { useState } from "react";
const backendUrl = import.meta.env.VITE_BACKEND_URL;

const Register = () => {
  console.log("Backend URL:", backendUrl); // Log the backend URL to verify it's being read correctly
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const doRegister = async () => {
    const response = await fetch(`${backendUrl}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log("Response from backend:", data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    doRegister();
  };

  return (
    <div>
      <h1>Register</h1>
      <form
        method="POST"
        onsubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          required
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
