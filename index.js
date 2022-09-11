class Producto {
    constructor(nombre, precio, cantidad) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
    }
    cotizar = () => (this.precio * this.cantidad) * 1.18
}

crearProductos = () => {
    let productos = [];
    let cantidadProductos = parseInt(
        prompt("Bienvenido a mi Cotizador \nIngrese la cantidad de productos que desee registrar")
    );


    for (let index = 0; index < cantidadProductos; index++) {
        let nombre = prompt("Ingrese el nombre del producto");
        let precio = parseFloat(prompt("Ingrese el precio del producto"));
        let cantidad = parseInt(prompt("Ingrese la cantidad de producto"));

        let productoACrear = new Producto(
            nombre,
            precio,
            cantidad
        );

        productos.push(productoACrear)
    }
    return productos
}

verProductos = (productos) => {
    for(let producto of productos){
        console.log(producto)
        console.log(producto.nombre)
    }
}

calcularCotizacion=(productos)=>{
    let calcular = 0
    for (let producto of productos){
        calcular = calcular + producto.cotizar()
    }
    return calcular
}

main = () =>{
    let productos = crearProductos()
    console.log(productos)
    let costoProducto = calcularCotizacion(productos)
    alert("El precio total de los productos ingresados es: " + costoProducto + " Inc. 18% de IGV \n ")
}

main()