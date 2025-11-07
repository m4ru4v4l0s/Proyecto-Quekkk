 import '../styles/header.css'
 import carrito from "../../public/carrito.png"
 export default function Header (){
    return (
        <header className="header">
    <div className="menu-container">

      <nav className="nav">
        <ul>
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Productos</a></li>
          <li><a href="#">Nosotros</a></li>
          <li><a href="#">Contacto</a></li>
        </ul>
      </nav>

      <div>
        <ul>
          <li className="carrito-container">
            <img src={carrito} id="img-carrito" alt="carrito" />
            <div id="carrito">
              <table id="lista-carrito">
                <thead>
                  <tr>
                    <th>Imagen</th>
                    <th>Nombre</th>
                    <th>Precio</th>
                  </tr>
                </thead>
                <tbody></tbody>
              </table>

              <a href="#" id="vaciar-carrito" class="btn-vaciar">Vaciar Carrito</a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="header-zapatillas">
      <div class="header-img">
        <img src="../assets/assets/menu/zapasheader.png" alt="" />
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
 