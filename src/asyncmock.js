const productos = [
    {id:"1", nombre:"Camiseta", precio:19999, img:"https://www.soycuervo.com/ccstore/v1/images/?source=/file/v5950903615756272940/products/9872_490_1.jpg", idCat: "1"},
    {id:"2", nombre:"Short", precio:16999, img:"https://www.soycuervo.com/ccstore/v1/images/?source=/file/v8772062792456463106/products/9816_100_1.jpg", idCat: "2"},
    {id:"3", nombre:"Campera", precio:19999, img:"https://www.soycuervo.com/ccstore/v1/images/?source=/file/v5614453709439021360/products/CamperaRompeVientos-BV6881-410-PHSFH001.jpg", idCat: "3"},
    {id:"4", nombre:"Buzo", precio:13999, img:"https://www.soycuervo.com/ccstore/v1/images/?source=/file/v1101853815950160924/products/buzo%20entrenamiento%20casla.jpg", idCat: "4"}
]

export const getProductos = () => {
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(productos)
        }, 100)
    })
}

export const getUnProducto = (id) =>{
    return new Promise (resolve =>{
        setTimeout(()=>{
            const producto = productos.find(prod => prod.id === id);
            resolve (producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCat) =>{
    return new Promise ( resolve =>{
        setTimeout(()=>{
            const productosCategoria = productos.filter(prod => prod.idCat === idCat);
            resolve (productosCategoria)
        },100)
    })
}