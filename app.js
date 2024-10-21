//funciòn que carga las animaciones de las habilidades
function cargarAnimaciones() {
    $(function () {
        $('.chart1').easyPieChart({
            size: 160,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 15,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });
        $('.chart2').easyPieChart({
            size: 160,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 15,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });
        $('.chart3').easyPieChart({
            size: 160,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 15,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });
        $('.chart4').easyPieChart({
            size: 160,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 15,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });
        $('.chart5').easyPieChart({
            size: 160,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 15,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });
        $('.chart6').easyPieChart({
            size: 160,
            barColor: "#ff5b00",
            scaleLength: 0,
            lineWidth: 15,
            tackColor: "#525151",
            lineCap: "circle",
            animate: 2000,
        });

    })
}
//Función para filtrar las categorías de los trabajos
function verCategoria(cat) {
    const items = document.getElementsByClassName("item");
    for (let i = 0; i < items.length; i++) {
        items[i].style.display = "none";
    }

    const itemCat = document.getElementsByClassName(cat);
    for (let i = 0; i < itemCat.length; i++) {
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
function responsiveMenu() {
    let x = document.getElementById("nav");
    if (x.className === "") {
        x.className = "responsive";

        //creamos el elemento que cierra el menu
        let span = document.createElement("span");
        span.innerHTML = "X";
        document.getElementById("nav").appendChild(span);

        //quitamos el boton eliminar cuando se hace click sobre este
        span.onclick = function () {
            x.className = "";
            span.remove();
        }
    } else {
        x.className = "";
    }
}

//Este codigo es para agregar una función a cada links del menu
//responsive
//cuando se presione en cualquier de los links del menu debe desaparecer el menu
const links = document.querySelectorAll("#nav a");
for (i = 0; i < links.length; i++) {
    links[i].onclick = function () {
        var x = document.getElementById("nav");
        x.className = "";

        //removemos el boton eliminar
        btnEliminar = document.querySelector("#nav span");
        btnEliminar.remove();
    }
}












//Funcion que aplica las animaciones de las habilidades
function efectoHabilidades() {
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >= 300) {
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("photoshop");
        habilidades[3].classList.add("wordpress");
        habilidades[4].classList.add("drupal");
        habilidades[5].classList.add("comunicacion");
        habilidades[6].classList.add("trabajo");
        habilidades[7].classList.add("creatividad");
        // habilidades[8].classList.add("dedicacion");
        // habilidades[9].classList.add("proyect");
    }
}


//detecto el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function () {
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
infoP.forEach(function (infoP) {
    infoP.addEventListener("click", openModal);
});

// Función para abrir el modal
function openModal(event) {
    let dataModalId = parseInt(event.target.getAttribute("data-modal-id"))
    console.log(dataModalId);


    fetch('data.json')
        .then(response => {
            // console.log(response.json());

            return response.json()
        })
        .then(data => {
            console.log(data);

            let selectedProject = data.find(item => item.id === dataModalId)
            console.log(selectedProject);

            mostrarProductos(selectedProject)
            mostrarProductos2(selectedProject)

        }).catch(error => {
            console.error('Hubo un problema con la solicitud:', error);
        });

    modal.style.display = "block"; // Mostrar el modal
}

// Función para cerrar el modal
span.onclick = function () {
    modal.style.display = "none"; // Ocultar el modal
    limpiarModal()
}

// Cerrar el modal si se hace clic fuera de él
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Ocultar el modal
        limpiarModal()

    }
}



function limpiarModal() {
    modalContentDiv1.innerHTML = "";  // Limpiar la parte de la imagen
    modalContentDiv2.innerHTML = ""
}



function mostrarProductos(selectedProject) {
    console.log("Se llamo a la funcion correctamente", selectedProject);

    modalContentDiv1 = document.querySelector(".modal-content-div1")
    console.log(modalContentDiv1);

    // data.forEach(item => {
    //     `
    //     <img src ="${item.imagen}" class="h-64 w-96 object-cover  sm: w-60 h-28"  alt = ${item.imagen}/>

    //     `


    // })


    let imagen = `
    <img src ="${selectedProject.imagen}" class="imagenModal"  alt = ${selectedProject.imagen}/>

    `
    modalContentDiv1.innerHTML += imagen/*  */
}

function mostrarProductos2(selectedProject) {
    modalContentDiv2 = document.querySelector(".modal-content-div2");

    // Obtén el idioma actual
    const currentLanguage = i18next.language;


    let content =
        `
        <div class="div-overlay">
            <p  class="p-divContent2">${selectedProject.descripcion[currentLanguage]}</p>
            <span class="span-divContent2">${i18next.t('enlace')}:</span>
            <a class="a-divContent2" target="_blank" href="${selectedProject.enlace}">${selectedProject.enlace}</a>
            <span class="span-divContent2">${i18next.t('tecnologiasUsadas')}:</span>
        </div>

                
    `

    selectedProject.galeria.forEach(item => {
        content += `<img class=" img-divContent2"  src =${item} alt = ${item}/>`
    })

    modalContentDiv2.innerHTML += content
}

//------------  ↑↑↑↑↑ ACA TERMINA TODO SOBRE EL MODAL ↑↑↑↑↑ -------/////////



//---------- ↓↓↓↓↓↓↓ ACA EMPIEZA PARA TRADUCIR LA PAGINA ↓↓↓↓↓↓↓ -----------///


// Inicializa i18next con los plugins de backend y detector de idioma
i18next
    .use(i18nextHttpBackend) // Permite cargar archivos JSON desde el servidor
    .use(i18nextBrowserLanguageDetector) // Detecta el idioma del navegador
    .init({
        fallbackLng: 'es', // Idioma por defecto
        debug: true, // Modo debug para ver más información en consola
        backend: {
            // Cambia la ruta a los archivos JSON
            loadPath: 'traduccion_{{lng}}.json' // Ruta a los archivos JSON
        }
    }, function (err, t) {
        if (err) return console.error(err);

        // Traduce el contenido una vez que i18next está listo
        updateContent();
    });

// Función para actualizar el contenido del HTML con las traducciones
function updateContent() {
    document.querySelectorAll('[data-i18n]').forEach(function (element) {
        const key = element.getAttribute('data-i18n');
        element.textContent = i18next.t(key);
    });
}

// Event listeners para cambiar el idioma al hacer clic en los botones
document.getElementById('btn-en').addEventListener('click', function () {
    i18next.changeLanguage('en', function() {
        updateContent(); // Actualiza el contenido estático
        mostrarProductos2(selectedProject); // Muestra el contenido del modal en inglés
    });
});

let botonES = document.getElementById('btn-es').addEventListener('click', function () {
    i18next.changeLanguage('es', function() {
        updateContent(); // Actualiza el contenido estático
        mostrarProductos2(selectedProject); // Muestra el contenido del modal en español
    });

});

