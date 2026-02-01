window.addEventListener('message', (event) => {
    const data = event.data;

    if(data.type === "verCoordenadas"){
        document.getElementById("coordsX").textContent = `X: ${(data.x).toFixed(2)}`;
        document.getElementById("coordsY").textContent = `Y: ${(data.y).toFixed(2)}`;
        document.getElementById("coordsZ").textContent = `Z: ${(data.z).toFixed(2)}`;
        document.getElementById("coordsH").textContent = `H: ${(data.heading).toFixed(2)}`;
    }
})

window.addEventListener('message', (event) => {
    const e = event.data;

    if(e.type === "abrirPanel"){
        if(e.abierto === true){
            document.getElementById("uiDisplay").classList.add("activo");
            document.getElementById("uiDisplay").classList.remove("noActivo");
        }else {
            document.getElementById("uiDisplay").classList.add("noActivo");
            document.getElementById("uiDisplay").classList.remove("activo");
        }
    }

})
