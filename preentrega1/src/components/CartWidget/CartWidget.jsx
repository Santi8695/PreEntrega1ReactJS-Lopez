import React from 'react'
import './CartWidget.css'


const CartWidget = () => {
    const imgCarrito = "https://cdn-icons-png.flaticon.com/512/3144/3144456.png"
  return (
    <div className="carrito">
        <img src={imgCarrito} alt="Carrito de Compras" />
        <p>1</p>
    </div>
  )
}

export default CartWidget