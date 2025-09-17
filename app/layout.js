import './globals.css';

export const metadata = { title: 'ModelSearcher', description: 'Simple directory + blog' };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header className="header">
          <div className="container" style={{display:'flex',gap:16,alignItems:'center',padding:'12px 16px'}}>
            <a href="/" style={{fontWeight:700}}>ModelSearcher</a>
            <nav className="nav">
              <a href="/models">Models</a>
              <a href="/categories">Categories</a>
              <a href="/blog">Blog</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer className="footer">
          <div className="container" style={{padding:'12px 16px',fontSize:14,opacity:.75}}>
            © {new Date().getFullYear()} ModelSearcher
          </div>
        </footer>
      </body>
    </html>
  );
}
