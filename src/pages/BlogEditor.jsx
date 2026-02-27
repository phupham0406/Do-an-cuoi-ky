import { FaPenFancy, FaLock } from "react-icons/fa";

export default function BlogEditor() {
  return (
    <div className="editor-page">
      <div className="editor-card">
        <div className="editor-header">
          <FaPenFancy />
          <h2>Blog Editor</h2>
        </div>

        <p className="editor-desc">
          Write and manage your blog posts. This page is protected.
        </p>

        <span className="editor-badge">
          <FaLock /> Protected Page
        </span>

        <form className="editor-form">
          <input type="text" placeholder="Post title" />

          <textarea rows="6" placeholder="Write your content here..." />

          <button type="button">Publish (demo)</button>
        </form>
      </div>
    </div>
  );
}
