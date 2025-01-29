import React from 'react'
import "./ItemDetail.css";

const ItemDetail = ({ id, nombre, precio, img }) => {
    return (
        <div className='contenedorItem'>
            <h2>Nombre: {nombre} </h2>
            <h3>Precio: {precio} </h3>
            <h3>ID: {id} </h3>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis molestiae voluptate esse dignissimos assumenda autem architecto rem incidunt error numquam distinctio nesciunt, minima quibusdam voluptas facilis asperiores quasi magni ea?</p>
            <img src={img} alt={nombre} />
        </div>
    )
}

export default ItemDetail