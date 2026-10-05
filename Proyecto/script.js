/* ========================= */
/* BANNER PRINCIPAL */
/* ========================= */

const fotosBanner = document.querySelectorAll(".banner-foto");

const anteriorBanner = document.querySelector(".anterior-banner");

const siguienteBanner = document.querySelector(".siguiente-banner");

const indicadores = document.querySelectorAll(".indicador");

let indiceBanner = 0;


function mostrarBanner() {

    fotosBanner.forEach(function(foto) {

        foto.classList.remove("activa");

    });


    indicadores.forEach(function(indicador) {

        indicador.classList.remove("activo");

    });


    fotosBanner[indiceBanner].classList.add("activa");

    indicadores[indiceBanner].classList.add("activo");

}


function siguienteFoto() {

    indiceBanner++;

    if (indiceBanner >= fotosBanner.length) {

        indiceBanner = 0;

    }

    mostrarBanner();

}


function anteriorFoto() {

    indiceBanner--;

    if (indiceBanner < 0) {

        indiceBanner = fotosBanner.length - 1;

    }

    mostrarBanner();

}


siguienteBanner.addEventListener("click", siguienteFoto);


anteriorBanner.addEventListener("click", anteriorFoto);


/* CAMBIO AUTOMÁTICO CADA 5 SEGUNDOS */

setInterval(function() {

    siguienteFoto();

}, 5000);



/* ========================= */
/* CARRUSEL DE MOTOS */
/* ========================= */

const motos = document.querySelectorAll(".moto");

const anterior = document.querySelector(".anterior");

const siguiente = document.querySelector(".siguiente");

let indice = 0;


function mostrarMoto() {

    motos.forEach(function(moto) {

        moto.classList.remove("activa");

    });

    motos[indice].classList.add("activa");

}


siguiente.addEventListener("click", function() {

    indice++;

    if (indice >= motos.length) {

        indice = 0;

    }

    mostrarMoto();

});


anterior.addEventListener("click", function() {

    indice--;

    if (indice < 0) {

        indice = motos.length - 1;

    }

    mostrarMoto();

});