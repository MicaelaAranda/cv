// CONTACTO

let esconder_contacto = document.getElementById("esconder_contacto");

let escondercontact = document.getElementById("escondercontact");

esconder_contacto.addEventListener("click", mostrarContacto);

function mostrarContacto() {
    escondercontact.classList.toggle("aparecer");
}

// ESTUDIOS

let esconder_estudios = document.getElementById("esconder_estudios");

let esconderestudios = document.getElementById("esconderestudios");

esconder_estudios.addEventListener("click", mostrarEstudios);

function mostrarEstudios() {
    esconderestudios.classList.toggle("aparecer_estudios");
}

// experiencia

let esconder_experiencia = document.getElementById("esconder_experiencia");

let esconderExperiencia = document.getElementById("esconderExperiencia");

esconder_experiencia.addEventListener("click", mostrarExperiencia);

function mostrarExperiencia() {
    esconderExperiencia.classList.toggle("aparecer_experiencia");
}