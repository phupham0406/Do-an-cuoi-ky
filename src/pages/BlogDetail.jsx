import { useParams, Link } from "react-router-dom";

export default function BlogDetail() {
  const { id } = useParams();

  return (
    <article className="post">
      <h1>Blog Post #{id}</h1>
      <p className="meta">March 2026 · Pham Phu</p>

      <p>
        This is a minimal blog detail page. The typography, spacing and layout
        are designed for comfortable reading.
      </p>

      <p>
        Using React Router, this page is rendered dynamically based on the URL
        parameter.
      </p>

      <Link className="back" to="/blog">
        ← Back to blog
      </Link>
    </article>
  );
}
