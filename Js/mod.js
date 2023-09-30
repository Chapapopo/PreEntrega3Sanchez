let btnToggle = document.getElementById("btnToggle")
if(localStorage.getItem("modoOscuro")){
}
else{
    localStorage.setItem("modoOscuro", false)
    //quito cualquier remanente que pudo quedar y seteo fondo claro de entrada
    document.body.classList.remove("FondoOscuro")
    document.body.classList.remove("Fondo")
    document.body.classList.toggle("Fondo")
}
 
if(JSON.parse(localStorage.getItem("modoOscuro")) == true){
    document.body.classList.remove("FondoOscuro")
    document.body.classList.remove("Fondo")
    document.body.classList.toggle("FondoOscuro")
    btnToggle.innerText = "Light"
}

btnToggle.addEventListener("click", () => {
    if(JSON.parse(localStorage.getItem("modoOscuro")) == false){
        //remuevo el anterior estilo y seteo el nuevo
    document.body.classList.remove("FondoOscuro")
    document.body.classList.remove("Fondo")
        document.body.classList.toggle("FondoOscuro")
        //cambio el texto del boton
        btnToggle.innerText = "Light"
        localStorage.setItem("modoOscuro", true)
    }
    else if(JSON.parse(localStorage.getItem("modoOscuro")) == true){
        document.body.classList.remove("FondoOscuro")
        document.body.classList.remove("Fondo")
        document.body.classList.toggle("Fondo")
        btnToggle.innerText = "Dark"
        localStorage.setItem("modoOscuro", false)
    }
})