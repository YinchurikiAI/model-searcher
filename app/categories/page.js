import categories from '../../data/categories.json';

export default function CategoriesPage() {
  return (
    <section>
      <h1>Categories</h1>
      <ul
        style={{
          display: 'grid',
          gap: 12,
          gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
          padding: 0,
          listStyle: 'none',
        }}
      >
        {categories.map((cat) => (
          <li key={cat.slug} className="card">
            <a href={`/categories/${cat.slug}`}>
              <div className="p">
                <div style={{ fontWeight: 600 }}>{cat.name}</div>
                <div className="badge">{cat.description || '—'}</div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
