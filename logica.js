
function filtrarPorPrecio(precioMax){
    const filtrados = productos.filter((productos) => productos.precio <= precioMax);
    //console.log(filtrados);
    return filtrados;
}

//datos de entrada
let precioUsuario = parseFloat(prompt('Ingresa el precio maximo que puedes abonar (0-salir)'));

while(precioUsuario != 0){
    if(isNaN(precioUsuario) || precioUsuario < 0){
        alert('Por favor, ingrese un numero valido 😲');
    }else{
        const prodsFiltrados = filtrarPorPrecio(precioUsuario);
        console.table(prodsFiltrados);
    }
    //se vuelve a preguntar
    precioUsuario = parseFloat(prompt('Ingresa el precio maximo que puedes abonar (0-salir)'));
}

let gastoTotal = 0;

let producto = prompt('1-Remera Oversize Roja ... $4500\n 2-Remera Oversize Negra ... $5000\n3-Remera Oversize Blanca $4800\n4-Pantalon Cargo Jean ... $8500\n5-Pantalon Cargo Negro ... $8000\nPantalon Cargo Marron ... $7700\n0-Para finalizar compra');

while(producto != '0'){
    switch(producto){
        case '1':
            alert('agregaste Remera Oversize Roja ... $4500');
            incrementoGastoTotal (4500);
            break;
        case '2':
            alert('agregaste Remera Oversize Negra ... $5000');
            incrementoGastoTotal (5000);
            break;
        case '3':
            alert('agregaste Remera Oversize Blanca ... $4800');
            incrementoGastoTotal (4800);
            break;
        case '4':
            alert('agregaste Pantalon Cargo Jean ... $8500');
            incrementoGastoTotal (8100);
            break;
        case '5':
            alert('agregaste Pantalon Cargo Negro ... $8000');
            incrementoGastoTotal (8000);
            break;
        case '6':
            alert('agregaste Pantalon Cargo Marron ... $7700');
            incrementoGastoTotal (7850);
            break;
            default:
                alert('codigo erroneo');
                break;
    }
    producto = prompt('1-Remera Oversize Roja ... $4500\n 2-Remera Oversize Negra ... $5000\n3-Remera Oversize Blanca $4800\n4-Pantalon Cargo Jean ... $8500\n5-Pantalon Cargo Negro ... $8000\nPantalon Cargo Marron ... $7700\n0-Para finalizar compra');
}

alert('monto total de tu compra $ '+gastoTotal);

function incrementoGastoTotal(precioRemera){
    gastoTotal = gastoTotal + precioRemera;
    console.log('subtotal hasta el momento $'+gastoTotal);
}

console.log('el total es '+gastoTotal);
