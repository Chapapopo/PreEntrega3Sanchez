/* uso este archivo para probar las funciones o para guardarlas si ya no las uso

no esta ligado a la pagina principal*/


/* Funcion de cambiar */
function BuscarProducto() {
    let salir = false
    
    do{
        let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
        1 ${Ojota[0].Modelo}
        2 ${Ojota[1].Modelo}
        3 ${Ojota[2].Modelo}
        4 ${Ojota[3].Modelo}
        5 ${Ojota[4].Modelo}
        6 ${Ojota[5].Modelo}`
        ))
        switch(opcionIngresada){
            case 1:
                /* Funcion para cambiar el precio */
                CambiarPrecio(0)
            break
            case 2:
                CambiarPrecio(1)
            break
            case 3:
                CambiarPrecio(2)
            break
            case 4:
                CambiarPrecio(3)
            break
            case 5:
                CambiarPrecio(4)
            break
            case 6:
                CambiarPrecio(5)
            break
            case 0:
                console.log(`Gracias por utilizar nuestra app. Saludos!`)
                salir = true
            break   
            default:
                console.log("Opción no válida, ingrese alguna presente en el menu")
            break
            }
        }while(!salir)
}

function CambiarPrecio (NumeroDelProducto){
    console.log(Ojota[NumeroDelProducto].Modelo, Ojota[NumeroDelProducto].Precio)
    Ojota[NumeroDelProducto].Precio = parseInt(prompt(`Nuevo Precio del modelo ${Ojota[NumeroDelProducto].Modelo}`))
    console.log(Ojota[NumeroDelProducto].Modelo, Ojota[0].Precio)
/* Deveria agregarle una forma de identificar si el dato dado es correcto mas adelante */
}












/* Funcio para calcular*/
function Calcular(){

    /* defino variables */
    let salir = false
    var inflacion = "";
    var tarjeta = "";

    /* Taza inflacionaria */
    while (inflacion === null || inflacion === "" ||  inflacion <= 0 || isNaN(inflacion)) {
            inflacion = parseInt(prompt(`Taza inflacionaria`));
    }

    /* Pregunto el aumento con tarjeta */
    while (tarjeta === null || tarjeta === "" ||  tarjeta <= 0 || isNaN(tarjeta)) {
        tarjeta = parseInt(prompt(`Aumento con tarjeta`));
    }
        
    do{
        /* defino variables del do */
        var producto = "";
        var precio = "";
        var precioTarjeta = "";

        /* pregunto por el nombre del producto */
        while (producto === null || producto === "") {
            producto = prompt("Nombre del producto");
        }
        
        /* Precio del producto */
        while (precio === null || precio === "" ||  precio <= 0 || isNaN(precio)) {
            precio = parseInt(prompt(`Precio del prducto ${producto}`));
        }
        
        /* Aplico la taza inflacionaria */
        inflacion = inflacion/100 + 1
        precio = precio * inflacion
        
        /* Redondeo el precio a partir de las decenas */
        precio = parseInt(precio)
        precio = precio/100
        precio = parseInt(precio)
        precio = precio*100
        
        /* Creo el precio con tarjeta */
        tarjeta = tarjeta/100 + 1
        precioTarjeta = precio * tarjeta
        
        /* Redondeo el precio a partir de las decenas */
        precioTarjeta = parseInt(precioTarjeta)
        precioTarjeta = precioTarjeta/100
        precioTarjeta = parseInt(precioTarjeta)
        precioTarjeta = precioTarjeta*100
        
        /* Imprimo el producto con su nuevo precio con efectivo o tarjeta */
        listaPrecios = producto + " " + precio + " " + precioTarjeta + "\n"
        document.write(listaPrecios)
        
        /* Pregunto para cargar mas productos */
        let opcionIngresada = parseInt(prompt(`Calculas otro precio?
        0 - No`))
            switch(opcionIngresada){
            case 0:
                console.log(`Gracias por utilizar nuestra app. Saludos!`)
                salir = true
                break   
            default:
                console.log("Opción no válida, ingrese alguna presente en el menu")
                salir = false
                break
        }
        
    }while(!salir);

}


function Compra() {

    /* Defino variables */
    var CantidadDePrendas = "";
    var PrecioDelProducto = "";
    var ValorFinalDeLaCompra = "";
    let salir = false
        
    /* Inicio el do para elegir el producto */
    do{
    var Prenda = parseInt(prompt(`Ingrese la opción deseada
        1 ${Ojota[0].Modelo}
        2 ${Ojota[1].Modelo}
        3 ${Ojota[2].Modelo}
        4 ${Ojota[3].Modelo}
        5 ${Ojota[4].Modelo}
        6 ${Ojota[5].Modelo}`
        ))
        switch (Prenda) {
            case 1:
                /* Remeras */
                while (CantidadDePrendas === null || CantidadDePrendas === "" ||  CantidadDePrendas <= 0 || isNaN(x)) {
                    CantidadDePrendas = parseInt(prompt("Cantidad de prendas"));
                }
                PrecioDelProducto = 2000;
                ValorFinalDeLaCompra = PrecioDelProducto*CantidadDePrendas;
                salir = true
                break;
            case 2:
                /* Pantalones */
                while (x === null || x === "" ||  x <= 0 || isNaN(x)) {
                    x = parseInt(prompt("Cantidad de prendas"));
                }
                y = 4000;
                z = y*x;
                salir = true
                break;
            case 3:
                /* Ojotas */
                while (x === null || x === "" ||  x <= 0 || isNaN(x)) {
                    x = parseInt(prompt("Cantidad de prendas"));
                }
                y = 3000;
                z = y*x;
                salir = true
                break;
            default:
                console.log("Producto no valido, intete de nuevo");
                break;
            }
    }while(!salir)

    /* Reinicio el salir */
    salir = false

    /* Este do es para el metodo de pago */
    do{
        var Prenda = parseInt(prompt(`Ingrese la opción deseada
            1 - Efectivo
            2 - Tarjeta +10%`))
        switch (Prenda) {
            case 1:
                /* Efectivo */
                document.write("El importe final es de " + z)
                salir = true
                break;
            case 2:
                /* Tarjeta */
                var salgo = false
                do{
                    var Prenda = parseInt(prompt(`Ingrese la opción deseada
                        1 - Debito
                        2 - Credito`))
                    switch (Prenda) {
                        case 1:
                            /* Debito */
                            z = parseFloat(1.1 * z)
                            document.write("El importe final es de " + z)
                            salgo = true
                            break;
                        case 2:
                            /* Credito */
                            while (cuo === null || cuo === "" ||  cuo <= 0 || isNaN(cuo)) {
                            var cuo = parseInt(prompt("Cantidad de cuotas (se agregara 1.5% de interes por numero de cuotas)"));
                            }
                            cuo = parseFloat(cuo * 1.5)
                            cuo = parseFloat(cuo/100 + 1.1)
                            z = parseInt(z * cuo)
                            document.write("El importe final es de " + z)
                            salgo = true
                            break;
                        default:
                            console.log("Opcion no valida, intente de nuevo");
                            break;
                        }
                }while(!salgo)
                salir = true
                break;
            default:
                console.log("Opcion no valida, intente de nuevo");
                break;
            }
    }while(!salir)
}