//CAPTURA DOM

let containerOjotas = document.getElementById("Ojotas")
let formCargarOjotas = document.getElementById("formCargarOjotas")
let guardarOjotasBtn = document.getElementById("guardarOjotasBtn")
let selectOrden = document.getElementById("selectOrden")
let buscador = document.getElementById("buscador")
let coincidenciasDiv = document.getElementById("coincidencias")
let modalBodyCarrito = document.getElementById("modal-bodyCarrito")
let botonCarrito = document.getElementById("botonCarrito")
let precioTotal = document.getElementById("precioTotal")

//Funciones 

//Funcion principal
function mostrarCatalogo(array){
    //inicio con el catalogo limpio
    containerOjotas.innerHTML = ""
    //recorro el array
    for(let ojota of array){
        //creo el elemento con cada uno de los objetos
        let ojotaNuevaDiv= document.createElement("div")
        ojotaNuevaDiv.className = "col-12 col-md-6 col-lg-3 my-2"
        ojotaNuevaDiv.innerHTML = `
            <div id="${ojota.id}" class="card" style="width: 18rem;">
                    <img class="card-img-top img-fluid" style="height: auto;"src="Imagenes/${ojota.Imagen}" alt="${ojota.Modelo}">
                    <div class="card-body">
                        <h4 class="card-title"></h4>
                        <p>Modelo: ${ojota.Modelo}</p>
                        <p>Precio: ${ojota.Precio}</p>
                        <button id="agregarBtn${ojota.id}" class="btn btn-outline-success">Agregar al carrito</button>
                    </div>
            </div> `
        containerOjotas.append(ojotaNuevaDiv)
        let agregarBtn = document.getElementById(`agregarBtn${ojota.id}`)
        agregarBtn.addEventListener("click", () => {
            //voy a agregar al carrito
            agregarAlCarrito(ojota)
        })
    }
}

//Agrego a la compra
function agregarAlCarrito(elemento){
    //Preguto si la nueva ojota esta en el array
    let ojotaAgregada = productosCarrito.find((ojota) => ojota.id == elemento.id)
    ojotaAgregada == undefined ?  
            (//pongo el elemento en el carrito:
            productosCarrito.push(elemento),
            //setStorage
            localStorage.setItem("carrito", JSON.stringify(productosCarrito))) :
            console.log(`La ojota ${elemento.Modelo} ya existe en el carrito`)
}

//creo los el elemento en el carrito
function cargarProductosCarrito(array){
    modalBodyCarrito.innerHTML = ""
    array.forEach(
        (productoCarrito) => {
            modalBodyCarrito.innerHTML += `
            <div class="card border-primary mb-3" id ="productoCarrito${productoCarrito.id}" style="max-width: 540px;">
                 <img class="card-img-top" height=auto src="Imagenes/${productoCarrito.Imagen}" alt="">
                 <div class="card-body">
                        <h4 class="card-title">${productoCarrito.Modelo}</h4>
                         <p class="card-text">$${productoCarrito.Precio}</p> 
                         <button class= "btn btn-danger" id="botonEliminar${productoCarrito.id}"><i class="fas fa-trash-alt"></i></button>
                 </div>    
            </div>
            `
        }
    )
    //voy a calcular el total de la compra
    calcularTotal(array)    
}

//Funcion para calcular el totol
function calcularTotal(array){    
    const totalReduce = array.reduce(
        (acumulador, ojota)=>
        {return acumulador + ojota.Precio},
        0
    )
    totalReduce > 0 ? precioTotal.innerHTML = `<strong>El total de su compra es: ${totalReduce}</strong>` : precioTotal.innerHTML = `No hay productos en el carrito`
}

//funcion para buscar una ojota en particular por modelo
function buscarInfo(buscado,array){
    //me devuelve un array vacio si no encuentra, sino un array elementos con la coincidencias
    let coincidencias = array.filter(
        (ojota) => {
            return ojota.Modelo.toLowerCase().includes(buscado.toLowerCase())
        }
    )
    coincidencias.length > 0 ? (mostrarCatalogo(coincidencias), coincidenciasDiv.innerHTML ="") : (mostrarCatalogo(array), coincidenciasDiv.innerHTML = `<h3>No hay coincidencias con su búsqueda, este es nuestro catálogo completo</h3>`) 
}
//EVENTO:
buscador.addEventListener("input", () => {
    console.log(buscador.value)
    buscarInfo(buscador.value,Stock)
})


//Filtro por demografia
selectOrden.addEventListener("change", () => {
    console.log(selectOrden.value)
    switch(selectOrden.value){
        case "1":
            FiltrarDemografia("Hombre",Stock)
        break;
        case "2":
            FiltrarDemografia("Mujer",Stock)
        break;
        case "3":
            FiltrarDemografia("Infante",Stock)
        break;
        case "4":
            FiltrarDemografia("Bebe",Stock)
        break;
        default:
            mostrarCatalogo(Stock)
        break
    }
})

//Boton carrito
botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosCarrito)
})

//Funcion de filtrado
function FiltrarDemografia(x,Stock) {
    let arrayfiltrado = Stock.concat()
    arrayfiltrado = Stock.filter(function(Stock) {
        return Stock.Demo === x;
      })
      mostrarCatalogo(arrayfiltrado)
}

//codigo 
mostrarCatalogo(Stock)