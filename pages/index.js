import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>iARS - Tu mundo. Tu ritmo.</title>
        <meta name="description" content="Auriculares iARS – Conecta con tu ritmo y con lo más alto que hay dentro de ti." />
        <link rel="icon" href="/logo.png" />
      </Head>

      <main style={{ textAlign: 'center', padding: '2rem' }}>
        <h1>Bienvenido a iARS</h1>
        <p>Tu mundo. Tu ritmo.</p>
        <img src="/logo.png" alt="iARS logo" style={{ width: '150px', margin: '2rem auto' }} />
        <p>
          Cada vez que uses un iARS, te conectarás no solo con la música, sino con lo más alto que hay dentro de ti.
        </p>
      </main>

      {/* Botón flotante de WhatsApp */}
      <a
        href="https://wa.me/51966885672"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          zIndex: 1000
        }}
      >
        <img src="/logo.png" alt="WhatsApp iARS" style={{ width: '60px', height: '60px' }} />
      </a>
    </>
  );
}