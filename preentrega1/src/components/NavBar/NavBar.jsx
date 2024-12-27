import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <header>
        <h1>Espresso de Vida</h1>
        
        <nav>
            <ul>
                <li>Menu</li>
                <li>Historia</li>
                <li>Contactactanos</li>
                <li>Encargos</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar