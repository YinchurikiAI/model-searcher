import Link from 'next/link';
import { notFound } from 'next/navigation';

import posts from '../../../data/posts.json';

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export function generateMetadata({ params }) {
  const post = posts.find((x) => x.slug === params.slug);
  if (!post) {
    return { title: 'Post not found' };
  }

  return {
    title: post.title,
    description: post.excerpt || undefined,
  };
}

export default function BlogPost({ params }) {
  const post = posts.find((x) => x.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article style={{ padding: '16px 0', maxWidth: 760 }}>
      <Link href="/blog" className="badge" style={{ display: 'inline-block', marginBottom: 16 }}>
        ← Back to all posts
      </Link>
      <h1>{post.title}</h1>
      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          style={{ width: '100%', borderRadius: 12, marginTop: 16 }}
        />
      )}
      {post.excerpt && (
        <p style={{ marginTop: 16, fontSize: '1.05rem', color: 'var(--text-muted)' }}>
          {post.excerpt}
        </p>
      )}
      {post.body && (
        <div style={{ marginTop: 24, whiteSpace: 'pre-wrap', lineHeight: 1.6 }}>{post.body}</div>
      )}
    </article>
  );
}
