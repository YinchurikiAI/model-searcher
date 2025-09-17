import Link from 'next/link';

import posts from '../../data/posts.json';

export const metadata = {
  title: 'Blog',
  description: 'Read the latest updates from the ModelSearcher team.',
};

export default function BlogList() {
  return (
    <section>
      <h1>Blog</h1>
      <p style={{ marginTop: 12, maxWidth: 640 }}>
        Our thoughts, updates, and model spotlights collected in one place.
      </p>
      <div className="grid" style={{ marginTop: 24 }}>
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="card">
            {p.image && (
              <img
                src={p.image}
                alt={p.title}
                style={{ objectFit: 'cover' }}
              />
            )}
            <div className="p">
              <div style={{ fontWeight: 600 }}>{p.title}</div>
              <div className="badge">{p.excerpt || 'Read more'}</div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
