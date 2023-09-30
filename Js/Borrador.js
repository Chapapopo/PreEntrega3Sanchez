/* Pruevas y cosas que no afectaan al programa, que tengo que poner en un futouro o que estan como machete */




/* array de objetos, */

const Ojota = [
    {
        Demo:"Hombre",
        Modelo:"Top",
        Color: ["Negro","Rojo","Verde"],
        Talle:[39,41,43,45,47,49],
        Precio:2000,
    },
    {
        Demo:"Mujer",
        Modelo:"Slim",
        Color:["Negro","Dorado","Plata"],
        Talle:[35,37,39],
        Precio:3000,
    },
    {
        Demo:"Hombre",
        Modelo:"Power",
        Color:["Negro","Azul"],
        Talle:[39,41,43,45],
        Precio:5000,
    },
    {
        Demo:"Bebe",
        Modelo:"BBDisney",
        Color:["Roza"],
        Talle:[16,17,18,19,20,21,22,23,25],
        Precio:4500,
    },
    {
        Demo:"Infante",
        Modelo:"K Gliter",
        Color:["Azul","Roza"],
        Talle:[25,27,29,31,33,35],
        Precio:5500,
    },
    {
        Demo:"Infante",
        Modelo:"Grafity",
        Color:["Azul","Naranja"],
        Talle:[25,27,29,31,33,35],
        Precio:4000,
    },
];

class ojota{
    constructor(id, Demo, Modelo, Precio, Imagen){
        //atributos-propiedades
       this.id = id,
       this.Demo = Demo,
       this.Modelo = Modelo,
       this.Precio = Precio,
       this.Imagen = Imagen
    }
 }

  //Instanciación de objetos: 

    const ojota1 = new ojota(1,"Hombre", "Top", 2000, "Top.webp")
    
    const ojota2 = new ojota(2,"Mujer", "Slim", 3000, "Slim.webp")
    
    const ojota3 = new ojota(3,"Hombre", "Power", 5000, "Power.webp")
    
    const ojota4 = new ojota(4,"Bebe","BBDisney", 4500, "BBDisney.webp")
    
    const ojota5 = new ojota(5,"Infante", "KidsSlimGlitter", 5500, "KidsSlimGlitter.webp")
    
    const ojota6 = new ojota(6,"Infante", "Grafity", 4000, "Grafity.webp")
 
//arrays de objetos:
let   = []
let Stock = []
let productosCarrito = []
/* Stock.push(ojota1,ojota2,ojota3,ojota4,ojota5,ojota6) */
if(localStorage.getItem("Stock")){
    
    // Stock = JSON.parse(localStorage.getItem("Stock"))
    //hacer for of de Stock y pasarle new ojota
    for(let OJOTAS of JSON.parse(localStorage.getItem("Stock"))){
        let ojotaStorage = new ojota (OJOTAS.id, OJOTAS.Demo, OJOTAS.Modelo, OJOTAS.Precio, OJOTAS.Imagen)
        Stock.push(ojotaStorage)
    }

}else{
    //no existe seteamos porprimera vez
    console.log("seteamos por primera vez")
    Stock.push(ojota1,ojota2,ojota3,ojota4,ojota5,ojota6)
    localStorage.setItem("Stock", JSON.stringify(Stock))
}

let containerOjotas = document.getElementById("Ojotas")
let formCargarOjotas = document.getElementById("formCargarOjotas")
let guardarOjotasBtn = document.getElementById("guardarOjotasBtn")
let selectOrden = document.getElementById("selectOrden")
let buscador = document.getElementById("buscador")
let coincidenciasDiv = document.getElementById("coincidencias")




//Muestro catalogo
function mostrarCatalogo(array){
    // inicio con el catalogo limpio
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
            console.log("Funciona " + ojota.Modelo)
            //dentro del for of ojota es mi objeto
            productosCarrito.push(ojota)
            console.log(productosCarrito)
            })
        }
}

//Filtro y muestro la demografia eleguida
function FiltrarDemografia(x,Stock) {
    let arrayfiltrado = Stock.concat()
    arrayfiltrado = Stock.filter(function(Stock) {
        return Stock.Demo === x;
      })
      mostrarCatalogo(arrayfiltrado)
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





//select para ordenar catalogo
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











mostrarCatalogo(Stock)