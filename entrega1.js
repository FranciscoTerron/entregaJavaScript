

/* Entrega Numero 1 JavaScript
    . Nombre y Apellido : Francisco Terrón.
    . Año : 2022.
*/

// Productos

const producto1 = {
    nombre: prompt("Ingrese el nombre del producto"),
    precio: Number(prompt("Ingrese un precio para su producto")),
    cantidadDisponible: Number(prompt("Ingrese la cantidad disponible de su producto"))
}
const producto2 = {
    nombre: prompt("Ingrese el nombre del producto"),
    precio: Number(prompt("Ingrese un precio para su producto")),
    cantidadDisponible: Number(prompt("Ingrese la cantidad disponible de su producto"))
}

const producto3 = {
    nombre: prompt("Ingrese el nombre del producto"),
    precio: Number(prompt("Ingrese un precio para su producto")),
    cantidadDisponible: Number(prompt("Ingrese la cantidad disponible de su producto"))
}


// Funcion que saca el calculo del total de los productos

function calculoTotalProductos(productos) {
    let acumuladorPrecio = 0;
    for (let i = 0; i < productos.length; i++) {

        if (productos[i].cantidadDisponible != 0) {
            acumuladorPrecio += productos[i].precio;
        } else {
            // En el caso de que no haya stock muestro un mensaje para el usuario
            alert(`Del producto seleccionado ->  ${productos[i].nombre}  No es posible sumar porquen no queda stock`)
        }
    }
    return acumuladorPrecio;
}

// Modularice un poco para mostar los productos baratos en el caso de que el usuario lo desee

function mostrarProductosBaratos(productosBaratos) {
    for (let i = 0; i < productosBaratos.length; i++) {
        alert(`Nombre De Producto : ${productosBaratos[i].nombre} 
                    Precio De Producto : $ ${productosBaratos[i].precio}
                    Stock Disponible del producto : ${productosBaratos[i].cantidadDisponible}
        `)

    }
}



// No se si se podia pero genere un array con productos para que se me haga mas facil y mandar todos juntos

let arrayProductos = [producto1, producto2, producto3];

// Filtro los productos baratos 

let productosBaratos = arrayProductos.filter((producto) => producto.precio < 10000);
let precioTotal = calculoTotalProductos(arrayProductos);
do {
    let respuesta = prompt("¿Le gustaria conocer los productos baratos? En el caso de querer presione S y para salir presione una N  ");
    if (respuesta == 'S' || respuesta == 's') {
        mostrarProductosBaratos(productosBaratos);
    }
} while (respuesta == 'n' || respuesta == 'N')

alert("El precio total de los productos es de : " + " " + precioTotal);


