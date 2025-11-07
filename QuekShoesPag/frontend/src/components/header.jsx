 import '../styles/header.css'
 import carrito from "../../public/carrito.png"
 import logo from "../../public/logo.png"
 import headerz from "../../public/zapasheader.png"
 export default function Header (){
    return (
        <header className="header">
    <div className="menu-container">
        <img src= {logo} className='img-logo' alt=''/>
      <nav className="nav">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>

      <div>
            <img src={carrito} id="img-carrito" alt="carrito" /> 
      </div>
      
    </div>

    <div class="header-zapatillas">
      <div class="header-img">
        <img src={headerz} alt="" />
      </div>

      <div class="texto-header">
        <h1>Nuestro Stock</h1>
        <p>¡estrena las mejores zapatillas con nosotros!</p>
        <a href="#" class="btn-ver">Ver mas</a>
      </div>
    </div>
  </header>
    ) 
 }
 