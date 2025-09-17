import creators from '../../../data/creators.json';
import categories from '../../../data/categories.json';

export default function CategoryPage({ params }) {
  const cat = categories.find((c) => c.slug === params.slug);
  if (!cat) {
    return <div style={{ padding: 16 }}>Not found</div>;
  }
  const list = creators.filter((c) => (c.tags || []).includes(cat.slug));
  return (
    <section>
      <h1>{cat.name}</h1>
      {cat.description && <p style={{ opacity: 0.8 }}>{cat.description}</p>}
      <div className="grid" style={{ marginTop: 12 }}>
        {list.map((c) => (
          <a key={c.slug} href={`/models/${c.slug}`} className="card">
            <img src={c.img} alt={c.name} />
            <div className="p">
              <div style={{ fontWeight: 600 }}>{c.name}</div>
              <div className="badge">{(c.tags || []).join(', ')}</div>
            </div>
          </a>
        ))}
        {list.length === 0 && <div>No models in this category yet.</div>}
      </div>
    </section>
  );
}
