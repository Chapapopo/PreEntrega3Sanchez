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

//FUNCTIONS: 
function mostrarCatalogo(array){
    //inicio con el catalogo limpio
    containerOjotas.innerHTML = ""
    //recorro el array
    for(let ojota of array){
        //creo el elemento con cada uno de los objetos
        let ojotaNuevaDiv= document.createElement("div")
        ojotaNuevaDiv.className = "col-12 col-md-6 col-lg-4 my-2"
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
        console.log(agregarBtn)
        agregarBtn.addEventListener("click", () => {
            agregarAlCarrito(ojota)
        })
    }
}

function agregarAlCarrito(elemento){
    //preguntar: existe este ojota(elemento) en el array??
    let ojotaAgregada = productosCarrito.find((ojota) => ojota.id == elemento.id)
    //realizado con operador ternario
    ojotaAgregada == undefined ?  
            (//pusheo al array carrito:
            productosCarrito.push(elemento),
            //setStorage
            localStorage.setItem("carrito", JSON.stringify(productosCarrito)),
            console.log(productosCarrito)) :
            console.log(`La ojota ${elemento.Modelo} ya existe en el carrito`)
}

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
    calcularTotal(array)    
}
function calcularTotal(array){    
    const totalReduce = array.reduce(
        (acumulador, ojota)=>
        {return acumulador + ojota.Precio},
        0
    )
    totalReduce > 0 ? precioTotal.innerHTML = `<strong>El total de su compra es: ${totalReduce}</strong>` : precioTotal.innerHTML = `No hay productos en el carrito`
}

function buscarInfo(buscado,array){
    //me devuelve un array vacio si no encuentra, sino un array elementos con la coincidencias
    let coincidencias = array.filter(
        (ojota) => {
            //includes cualquier coincidencia parcial en el string con includes
            return ojota.Modelo.toLowerCase().includes(buscado.toLowerCase())
        }
    )
    //ternario para evaluar si coincidencias está vacio
    //ternario, tenemos varias instrucciones encerrar entre parentesis y separar por coma ,
    coincidencias.length > 0 ? (mostrarCatalogo(coincidencias), coincidenciasDiv.innerHTML ="") : (mostrarCatalogo(array), coincidenciasDiv.innerHTML = `<h3>No hay coincidencias con su búsqueda, este es nuestro catálogo completo</h3>`) 
}
//EVENTOS PROYECTO:
buscador.addEventListener("input", () => {
    console.log(buscador.value)
    buscarInfo(buscador.value,Stock)
})

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
botonCarrito.addEventListener("click", () => {
    cargarProductosCarrito(productosCarrito)
})

function FiltrarDemografia(x,Stock) {
    let arrayfiltrado = Stock.concat()
    arrayfiltrado = Stock.filter(function(Stock) {
        return Stock.Demo === x;
      })
      mostrarCatalogo(arrayfiltrado)
}

//CÓDIGO
mostrarCatalogo(Stock)