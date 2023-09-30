//creo el modelo de los objetos
class ojota{
    constructor(id, Demo, Modelo, Precio, Imagen){
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
    
    const ojota4 = new ojota(4,"Bebe","BB Disney", 4500, "BBDisney.webp")
    
    const ojota5 = new ojota(5,"Infante", "Kids Slim Glitter", 5500, "KSlimGlitter.webp")
    
    const ojota6 = new ojota(6,"Infante", "kid Grafity", 4000, "KGrafity.webp")

    const ojota7 = new ojota(7,"Hombre", "Dual", 4800, "Dual.webp")
    
    const ojota8 = new ojota(8,"Bebe","BB Logomania", 4500, "BBLogomania.webp")

    const ojota9 = new ojota(9,"Bebe","BB Palette Glow", 4500, "BBPaletteGlow.webp")
    
    const ojota10 = new ojota(10,"Mujer", "Flash Urban", 3000, "FlashUrban.webp")

    const ojota11 = new ojota(11,"Mujer", "Luna", 3000, "Luna.webp")
    
    const ojota12 = new ojota(12,"Mujer", "Slim Plataform", 6000, "SlimPlataform.webp")

    const ojota13 = new ojota(13,"Mujer", "Sweet", 3000, "Sweet.webp")

    const ojota14 = new ojota(14,"Mujer", "Wadges", 3000, "Wadges.webp")

    const ojota15 = new ojota(15,"Mujer", "You Angra", 3000, "YouAngra.webp")

    const ojota16 = new ojota(16,"Infante", "Kid Max", 4000, "KMax.webp")

    const ojota17 = new ojota(17,"Hombre", "HybridFree", 4800, "HybridFree.webp")
    
    const ojota18 = new ojota(18,"Infante","Kid Max Heroes", 4500, "KMaxHeroes.webp")

    const ojota19 = new ojota(19,"Infante","Kid Slim Glitter 2", 4500, "KSlimGlitter2.webp")
    
    const ojota20 = new ojota(20,"Hombre", "Power Ligth", 3000, "PowerLigth.webp")

 //arrays de objetos:
 let Stock = []

 //pregunto si tengo stock en el sistema
 if(localStorage.getItem("Stock")){
    //lo treigo 
    for(let OJOTAS of JSON.parse(localStorage.getItem("Stock"))){
        let ojotaStorage = new ojota (OJOTAS.id, OJOTAS.Demo, OJOTAS.Modelo, OJOTAS.Precio, OJOTAS.Imagen)
        Stock.push(ojotaStorage)
    }

}else{
    //Lo seteo por primera ves
    console.log("seteamos por primera vez")
    Stock.push(ojota1,ojota2,ojota3,ojota4,ojota5,ojota6,ojota7,ojota8,ojota9,ojota10,ojota11,ojota12,ojota13,ojota14,ojota15,ojota16,ojota17,ojota18,ojota19,ojota20,)
    localStorage.setItem("Stock", JSON.stringify(Stock))
}

//setear productosCarrito con operador Nullish
let productosCarrito = JSON.parse(localStorage.getItem("carrito")) ?? []
console.log(productosCarrito)