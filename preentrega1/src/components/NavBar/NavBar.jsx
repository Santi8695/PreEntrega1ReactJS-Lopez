import "./NavBar.css"
import CartWidget from "../CartWidget/CartWidget";

import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <Link to="/PreEntrega2ReactJS-Lopez">
      <img src="/PreEntrega2ReactJS-Lopez/img/logoUrbanRituals.png" alt="Logo de Urban Rituals" />
      </Link>

      <nav>
        <ul>
         
          <li>
            <NavLink to="/categoria/Nike">Nike</NavLink>
          </li>

          <li>
            <NavLink to="/categoria/Adidas">Adidas</NavLink>
          </li>

        </ul>
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar