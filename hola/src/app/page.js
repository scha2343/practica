export default function Home() {
  return (
    <div>
      <nav style={{ background: '#333', padding: '10px' }}>
        <ul style={{ display: 'flex', listStyle: 'none', margin: 0, padding: 0 }}>
          <li style={{ marginRight: '20px' }}>
            <a href="/" style={{ color: 'white', textDecoration: 'none' }}>Inicio</a>
          </li>
          <li style={{ marginRight: '20px' }}>
            <a href="/about" style={{ color: 'white', textDecoration: 'none' }}>Sobre</a>
          </li>
          <li style={{ marginRight: '20px' }}>
            <a href="/contact" style={{ color: 'white', textDecoration: 'none' }}>Contactanos</a>
          </li>
        </ul>
      </nav>

      <header style={{ background: '#282c34', padding: '50px', textAlign: 'center', color: 'white' }}>
        <h1>Bienvenidos a nuestro sitio web</h1>
        <p>Descubre nuestros asombrosos tours</p>
      </header>

      <main style={{ padding: '20px' }}>
        <h2>Aprovecha nuestras ultimas ofertas</h2>
        <p>Los mejores tours guiados, precio, calidad y confianza</p>
      </main>
    </div>
  );
}
