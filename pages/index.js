export default function Home() {
  return (
    <main style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1517502166878-35c93a0072bb)',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif',
      color: '#fff',
      textShadow: '1px 1px 2px #000'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#FFD700' }}>Bienvenido a iARS</h1>
      <p style={{ fontSize: '1.5rem', color: '#ff6600' }}>Tu mundo. Tu ritmo.</p>

      <a
        href="https://wa.me/51966885672"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '30px',
          right: '30px',
          backgroundColor: '#25D366',
          color: 'white',
          borderRadius: '50%',
          width: '60px',
          height: '60px',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: '28px',
          textDecoration: 'none',
          boxShadow: '0 2px 6px rgba(0,0,0,0.3)'
        }}
      >
        💬
      </a>
    </main>
  );
}
