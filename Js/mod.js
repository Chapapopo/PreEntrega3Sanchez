let btnToggle = document.getElementById("btnToggle")
if(localStorage.getItem("modoOscuro")){
}else{
    localStorage.setItem("modoOscuro", false)
}
 
if(JSON.parse(localStorage.getItem("modoOscuro")) == true){
    document.querySelector("main").classList.toggle("FondoOscuro")
    btnToggle.innerText = "Light"
}

btnToggle.addEventListener("click", () => {
    document.querySelector("main").classList.toggle("FondoOscuro")
    if(JSON.parse(localStorage.getItem("modoOscuro")) == false){
        btnToggle.innerText = "Light"
        localStorage.setItem("modoOscuro", true)
    }
    else if(JSON.parse(localStorage.getItem("modoOscuro")) == true){
        btnToggle.innerText = "Dark"
        localStorage.setItem("modoOscuro", false)
    }
})