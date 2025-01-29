import "./ItemListContainer.css"
import { useState, useEffect } from 'react';
import { ItemList } from '../ItemList/ItemList';
import { getProductos } from '../../asyncmock';
import { getProductosPorCategoria } from "../../asyncmock";
import { useParams } from "react-router-dom"

const ItemListContainer = () => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        const functionProductos = idCategoria ? getProductosPorCategoria : getProductos;
        functionProductos(idCategoria)
            .then(respuesta => setProductos(respuesta))
    }, [idCategoria])

    return (
        <div className="itemListContainer">
            <ItemList productos={productos} />
        </div>
    )
}

export default ItemListContainer