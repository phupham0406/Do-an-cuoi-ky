import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogDetail from "./pages/BlogDetail";
import SignIn from "./pages/SignIn";
import BlogEditor from "./pages/BlogEditor";
import ProtectedRoute from "./components/ProtectedRoute";
import { FaFacebookF, FaGithub, FaInstagram } from "react-icons/fa";

export default function App() {
  const isLogin = localStorage.getItem("isLogin");
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("isLogin");
    navigate("/");
  };

  return (
    <>
      <header className="header">
        <div className="nav">
          <div className="logo">PhamPhu</div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/blog">Blog</Link>
            {isLogin && <Link to="/editor">Editor</Link>}
            {!isLogin && <Link to="/signin">Sign in</Link>}
            {isLogin && (
              <button className="logout" onClick={logout}>
                Logout
              </button>
            )}
          </nav>
        </div>
      </header>

      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<BlogList />} />
          <Route path="/blog/:id" element={<BlogDetail />} />
          <Route path="/signin" element={<SignIn />} />
          <Route
            path="/editor"
            element={
              <ProtectedRoute>
                <BlogEditor />
              </ProtectedRoute>
            }
          />
        </Routes>
      </main>
      <footer className="footer">
        <div className="footer-inner">
          <p className="copyright">
            © 2026 <strong>PhamPhu</strong>. All rights reserved.
          </p>

          <div className="footer-social">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaGithub />
            </a>

            <a href="#">
              <FaInstagram />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
