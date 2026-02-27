import { Link } from "react-router-dom";

const posts = [
  {
    id: 1,
    title: "Minimal Blog Design",
    desc: "How to design a clean and minimal blog UI.",
  },
  {
    id: 2,
    title: "React Router Explained",
    desc: "Build SPA navigation without page reload.",
  },
  {
    id: 3,
    title: "Protected Route",
    desc: "Simple authentication flow in React.",
  },
];

export default function BlogList() {
  return (
    <section>
      <h2 className="section-title">Latest Posts</h2>

      <div className="grid">
        {posts.map((p) => (
          <article key={p.id} className="card">
            <img src={`https://picsum.photos/600/400?random=${p.id}`} alt="" />
            <div className="card-body">
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <Link to={`/blog/${p.id}`}>Read more →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
