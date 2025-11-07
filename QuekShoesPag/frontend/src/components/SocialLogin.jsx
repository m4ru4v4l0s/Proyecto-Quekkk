import React from 'react';

const SocialLogin = () => {
  const handleSocialLogin = (provider) => {
    // Aquí iría la lógica de autenticación con el proveedor
    console.log(`Iniciando sesión con ${provider}`);
  };

  return (
    <div className="social-login">
      <button 
        className="social-btn google-btn"
        onClick={() => handleSocialLogin('google')}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M16.51 9.20455V9.27273H9.18164V10.7273H13.9409L12.8227 13.6318H9.18164C6.42727 13.6318 4.18164 11.3862 4.18164 8.63182C4.18164 5.87745 6.42727 3.63182 9.18164 3.63182C10.5955 3.63182 11.8836 4.15455 12.8955 5.04545L14.6545 3.28636C13.2727 2.04545 11.3182 1.31818 9.18164 1.31818C5.13182 1.31818 1.81818 4.63182 1.81818 8.68182C1.81818 12.7318 5.13182 16.0455 9.18164 16.0455C12.8455 16.0455 15.7591 13.6318 15.7591 8.68182C15.7591 8.13182 15.7091 7.68182 15.6591 7.23182L16.51 9.20455Z" fill="#4285F3"/>
        </svg>
        Continuar con Google
      </button>
      <button 
        className="social-btn facebook-btn"
        onClick={() => handleSocialLogin('facebook')}
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M16.5 9A16.1667 7.5 0 0 0 18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.4111 3.3875 17.1574 7.875 17.8344V11.6094H5.29688V9H7.875V7.0125C7.875 4.71094 9.35313 3.28125 11.4775 3.28125C12.4756 3.28125 13.5156 3.42188 13.5156 3.42188V5.625H12.3334C11.1625 5.625 10.875 6.34062 10.875 7.07812V9H13.3531L12.8956 11.6094H10.875V17.8344C15.3625 17.1574 18.75 13.4111 18.75 9H16.5Z" fill="#1877F2"/>
        </svg>
        Continuar con Facebook
      </button>
    </div>
  );
};

export default SocialLogin;