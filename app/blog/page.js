import posts from '../../data/posts.json';

export default function BlogList() {
  return (
    <section>
      <h1>Blog</h1>
      <div className="grid">
        {posts.map((p) => (
          <a key={p.slug} href={`/blog/${p.slug}`} className="card">
            {p.image && <img src={p.image} alt="" />}
            <div className="p">
              <div style={{ fontWeight: 600 }}>{p.title}</div>
              <div className="badge">{p.excerpt || ''}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
