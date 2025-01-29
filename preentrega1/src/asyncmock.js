const productos = [
    { id: "1", nombre: "Jordan 1 Retro High OG SP Fragment x Travis Scott", precio: 500, img: "/PreEntrega1ReactJS-Lopez/img/jordanRetroOGTrav.png", idCat: "Nike" },
    { id: "2", nombre: "Air Jordan 1 Retro High OG Chicago", precio: 500, img: "/PreEntrega1ReactJS-Lopez/img/jordanRetroHighChicago.png", idCat: "Nike" },
    { id: "3", nombre: "Nike SB Dunk Low Concepts Green", precio: 500, img: "/PreEntrega1ReactJS-Lopez/img/nikeSBDunkLowGreen.png", idCat: "Nike" },
    { id: "4", nombre: "Adidas Campus x Bad Bunny", precio: 500, img: "/PreEntrega1ReactJS-Lopez/img/adidasCampusBB.png", idCat: "Adidas" },
    { id: "5", nombre: "Adidas Samba Og", precio: 500, img: "/PreEntrega1ReactJS-Lopez/img/adidasSambaOg.png", idCat: "Adidas" },
    { id: "6", nombre: "Adidas Forum Buckle x Bad Bunny", precio: 500, img: "/PreEntrega1ReactJS-Lopez/img/adidasForumBuckleBB.png", idCat: "Adidas" }

];


export const getProductos = () => {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(productos);
        }, 2000)
    })
}

export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productoBuscado = productos.find(item => item.id === id);
            resolve(productoBuscado)
        }, 2000)
    })
}

//Funcion que retorna la categoria de productos (completa)

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
           const productosCategoria = productos.filter(item=> item.idCat === idCategoria);
           resolve(productosCategoria);
        }, 1000)
    })
}