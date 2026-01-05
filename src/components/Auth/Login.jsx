import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Please enter credentials");
      return;
    }
    login();
    navigate("/dashboard");
  };

  return (
    <div className="login-card">
      <h2>Employee Dashboard</h2>

    <div className="login-inputs">
      <p>Email: </p>
    <input
      placeholder="Email"
      onChange={e => setEmail(e.target.value)}
    />
<p>Password: </p>
    <input
      type="password"
      placeholder="Password"
      onChange={e => setPassword(e.target.value)}
    />
  </div>

      <button className="primary" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
