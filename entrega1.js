

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
            alert("Del producto seleccionado" + " " + productos[i].nombre + " " + "No es posible sumar porquen no queda stock")
        }
    }
    return acumuladorPrecio;
}



// No se si se podia pero genere un array con productos para que se me haga mas facil y mandar todos juntos

let arrayProductos = [producto1, producto2, producto3];
let precioTotal = calculoTotalProductos(arrayProductos);
alert("El precio total de los productos es de : " + " " + precioTotal);

