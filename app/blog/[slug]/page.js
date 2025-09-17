import posts from '../../../data/posts.json';

export default function BlogPost({ params }) {
  const p = posts.find((x) => x.slug === params.slug);
  if (!p) return <div style={{ padding: 16 }}>Not found</div>;
  return (
    <article style={{ padding: '16px 0' }}>
      <h1>{p.title}</h1>
      {p.image && <img src={p.image} alt="" style={{ width: '100%', borderRadius: 8, marginTop: 8 }} />}
      {p.excerpt && <p style={{ marginTop: 12 }}>{p.excerpt}</p>}
      {p.body && <div style={{ marginTop: 12, whiteSpace: 'pre-wrap' }}>{p.body}</div>}
    </article>
  );
}
