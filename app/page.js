import creators from '../data/creators.json';

export default function Home() {
  const top = creators.slice(0, 12);
  return (
    <section>
      <h1>Top Creators</h1>
      <div className="grid">
        {top.map(c => (
          <a key={c.slug} href={`/models/${c.slug}`} className="card">
            <img src={c.img} alt={c.name} />
            <div className="p">
              <div style={{fontWeight:600}}>{c.name}</div>
              <div className="badge">{(c.tags||[]).join(', ') || '—'}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
