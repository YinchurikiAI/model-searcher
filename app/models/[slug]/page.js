import creators from '../../../data/creators.json';

export default function ModelPage({ params }) {
  const model = creators.find((c) => c.slug === params.slug);
  if (!model) {
    return <div style={{ padding: 16 }}>Not found</div>;
  }
  return (
    <article style={{ padding: '16px 0' }}>
      <h1>{model.name}</h1>
      <img
        src={model.img}
        alt={model.name}
        style={{ width: '100%', maxHeight: 360, objectFit: 'cover', borderRadius: 8 }}
      />
      {model.bio && <p style={{ marginTop: 12 }}>{model.bio}</p>}
      {model.links && model.links.profile && (
        <p style={{ marginTop: 12 }}>
          <a href={model.links.profile} style={{ textDecoration: 'underline' }}>
            Visit profile →
          </a>
        </p>
      )}
    </article>
  );
}
