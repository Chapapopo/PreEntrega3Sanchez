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
 //es preguntar si estanteria existe en el storage:
 //si existe, hay info cargada
 let Stock = []
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
//setear productosCarrito con operador Nullish
let productosCarrito = JSON.parse(localStorage.getItem("carrito")) ?? []
console.log(productosCarrito)