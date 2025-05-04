export default function Home() {
  return (
    <main style={{
      backgroundColor: '#ffffff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Arial, sans-serif'
    }}>
      <h1 style={{ fontSize: '3rem', color: '#000' }}>Bienvenido a iARS</h1>
      <p style={{ fontSize: '1.5rem', color: '#ff6600' }}>Tu mundo. Tu ritmo.</p>
    </main>
  );
}
