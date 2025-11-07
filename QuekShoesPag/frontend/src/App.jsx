import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import BrandSection from './components/BrandSection';
import './styles/App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    // Aquí podrías redirigir al dashboard
    console.log('Login exitoso');
  };

  if (isLoggedIn) {
    return (
      <div className="app">
        <div className="dashboard">
          <h1>¡Bienvenido a Quekshoes!</h1>
          <p>Has iniciado sesión correctamente.</p>
          <button onClick={() => setIsLoggedIn(false)}>Cerrar Sesión</button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="login-container">
        <div className="form-section">
          <BrandSection />
          <LoginForm onLoginSuccess={handleLoginSuccess} />
        </div>
        <div className="image-section">
          <div className="image-overlay">
            <h2>Descubre tu estilo perfecto</h2>
            <p>Encuentra las zapatillas que se adaptan a tu personalidad y necesidades</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;