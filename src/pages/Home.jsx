import { Link } from "react-router-dom";
import { FaReact, FaPenNib, FaLock } from "react-icons/fa";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero hero-bg">
        <div className="hero-content">
          <h1>
            Personal <span>Portfolio</span>
          </h1>
          <p>A modern blog & portfolio built with React Router.</p>

          <Link className="cta-btn" to="/blog">
            Read the blog →
          </Link>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <div className="feature">
          <FaReact />
          <h3>React Router</h3>
          <p>SPA navigation without page reload.</p>
        </div>

        <div className="feature">
          <FaPenNib />
          <h3>Clean Blog</h3>
          <p>Minimal design focused on readability.</p>
        </div>

        <div className="feature">
          <FaLock />
          <h3>Protected Page</h3>
          <p>Authentication with protected routes.</p>
        </div>
      </section>

      {/* FEATURED POSTS */}
      <section className="home-posts">
        <h2>Featured Posts</h2>

        <div className="home-grid">
          <div className="home-card">
            <img src="https://picsum.photos/500/300?1" />
            <h4>Minimal Blog Design</h4>
            <Link to="/blog/1">Read →</Link>
          </div>

          <div className="home-card">
            <img src="https://picsum.photos/500/300?2" />
            <h4>React Router Explained</h4>
            <Link to="/blog/2">Read →</Link>
          </div>
        </div>
      </section>
    </>
  );
}
