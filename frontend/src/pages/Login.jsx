const Login = () => {
  return (
    <div>
      <h1>Login Page</h1>
      <form method="POST">
        <input type="text" name="username" placeholder="Username" required />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default Login;
