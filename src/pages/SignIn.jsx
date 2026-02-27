import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem("isLogin", "true");
    navigate("/editor");
  };

  return (
    <div className="auth">
      <h2>Sign in</h2>
      <button onClick={login}>Login</button>
    </div>
  );
}
