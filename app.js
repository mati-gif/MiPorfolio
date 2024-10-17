//funciòn que carga las animaciones de las habilidades
function cargarAnimaciones(){
    $(function(){
        $('.chart1').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart2').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart3').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart4').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart5').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });
        $('.chart6').easyPieChart({
            size:160,
            barColor:"#ff5b00",
            scaleLength:0,
            lineWidth:15,
            tackColor:"#525151",
            lineCap:"circle",
            animate:2000,
        });

    })
}
//Función para filtrar las categorías de los trabajos
function verCategoria(cat){
    const items = document.getElementsByClassName("item");
    for(let i=0; i < items.length;i++){
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for(let i = 0; i<itemCat.length;i++){
        itemCat[i].style.display = "block";
    }

    const links = document.querySelectorAll(".trabajos nav a");
    links[0].className = "";
    links[1].className = "";
    links[2].className = "";
    links[3].className = "";

    const itemSeleccionado = document.getElementById(cat);
    itemSeleccionado.className = "borde";
}

// //Función que detecta cuando lanzar la animación de las habilidades
// function efectoHabilidades(){
//     var skills = document.getElementById("habilidades");
//     var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
//     if(distancia_skills >= 300){
//         let habilidades = document.getElementsByClassName("chart");
//         habilidades[0].classList.add("chart1");
//         habilidades[1].classList.add("chart2");
//         habilidades[2].classList.add("chart3");
//         habilidades[3].classList.add("chart4");
//         habilidades[4].classList.add("chart5");
//         habilidades[5].classList.add("chart6");

//         cargarAnimaciones();
//     }
// }

// //detecto el scrolling para aplicar la animación de las habilidaes
// window.onscroll = function(){
//     efectoHabilidades();
// }

//función que muestra el menu responsive{
function responsiveMenu(){
    let x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";

        //creamos el elemento que cierra el menu
        let span = document.createElement("span");
        span.innerHTML = "X";
        document.getElementById("nav").appendChild(span);

        //quitamos el boton eliminar cuando se hace click sobre este
        span.onclick = function(){
            x.className = "";
            span.remove();
        }
    }else{
        x.className="";
    }
}

//Este codigo es para agregar una función a cada links del menu
//responsive
//cuando se presione en cualquier de los links del menu debe desaparecer el menu
const links = document.querySelectorAll("#nav a");
for(i=0; i < links.length;i++){
    links[i].onclick = function(){
        var x = document.getElementById("nav");
        x.className = "";

        //removemos el boton eliminar
        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}












//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        habilidades[8].classList.add("dedicacion");
        habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHabilidades();
} 

//--------- ↓↓↓↓↓↓ HACIENDO EL MODAL PARA LOS TRABAJOS ↓↓↓↓↓↓↓↓ -------------------//



//Arroy function.
// const openModal = () =>{
    
// }

//funcion anonima:
// const openModal = function(parametro1,parametro2){
    
// }

let infoP = document.querySelectorAll(".info-p");
console.log(infoP);

// Seleccionamos el modal y el botón de cerrar
const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];

// Añadimos el event listener a cada párrafo
infoP.forEach(function(infoP) {
    infoP.addEventListener("click", openModal);
});

// Función para abrir el modal
function openModal() {
    modal.style.display = "block"; // Mostrar el modal
}

// Función para cerrar el modal
span.onclick = function() {
    modal.style.display = "none"; // Ocultar el modal
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Ocultar el modal
    }
}

// Opcional: Funcionalidad para el botón enviar
const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", function() {
    const link = document.getElementById("link").value;
    const info = document.getElementById("info").value;
    console.log("Link ingresado:", link);
    console.log("Información ingresada:", info);
    // Aquí puedes agregar lógica para manejar los datos, como enviarlos a un servidor
    modal.style.display = "none"; // Cerrar el modal después de enviar
});

