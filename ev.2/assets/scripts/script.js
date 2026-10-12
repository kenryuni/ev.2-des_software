let personajes = [{
    Clase: "Nigromante",
    Nivel: 1,
    Vida: 20,
    Defensa: 3,
    Daño: 9,
    Maná: 15,
    img: "assets/imagenes/nigromante.webp"
},
{
    Clase: "Tanque",
    Nivel: 1,
    Vida: 35,
    Defensa: 12,
    Daño: 4,
    Maná: 0,
    img: "assets/imagenes/tanque.webp"
},
{
    Clase: "Druida",
    Nivel: 1,
    Vida: 22,
    Defensa: 5,
    Daño: 8,
    Maná: 12,
    img: "assets/imagenes/druida.webp"
},
{
    Clase: "Asesino",
    Nivel: 1,
    Vida: 18,
    Defensa: 6,
    Daño: 12,
    Maná: 8,
    img: "assets/imagenes/asesino.webp"
},
{
    Clase: "Guerrero",
    Nivel: 1,
    Vida: 28,
    Defensa: 9,
    Daño: 10,
    Maná: 5,
    img: "assets/imagenes/guerrero.webp"
}
]

let indiceActual = 0;

let contenedor = document.getElementById("contenedor");
let btnAnterior = document.getElementById("btn-Anterior");
let btnSiguiente = document.getElementById("btn-Siguiente");

function mostrarPersonaje() {
    let p = personajes[indiceActual];

    contenedor.innerHTML = `
        <div class="card w-100 shadow">
            <img src="${p.img}" class="card-img-top" alt="...">
            <div class="card-body">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <h5 class="card-title m-0">${p.Clase} (Nv. ${p.Nivel})</h5>
                    <button class="btn btn-sm btn-primary" onclick="aumentarNivel()">+</button>
                </div>
                <p class="card-text">
                    Vida: ${p.Vida}<br>
                    Defensa: ${p.Defensa}<br>
                    Daño: ${p.Daño}<br>
                    Maná: ${p.Maná}
                </p>
            </div>
        </div>
    `;
}


function aumentarNivel() {
    let p = personajes[indiceActual];
    
    p.Nivel++;
    p.Vida += 3;
    p.Defensa += 3;
    p.Daño += 3;
    p.Maná += 3;

    mostrarPersonaje();
}
function cambiarPersonaje(direccion) {
    indiceActual += direccion;


    if (indiceActual >= personajes.length) {
        indiceActual = 0;
    }

    if (indiceActual < 0) {
        indiceActual = personajes.length - 1;
    }

    mostrarPersonaje();
}

btnSiguiente.addEventListener("click", () => {
    cambiarPersonaje(1);
});

btnAnterior.addEventListener("click", () => {
    cambiarPersonaje(-1);
});


mostrarPersonaje();