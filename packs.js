const API_PACKS =
    "https://script.google.com/macros/s/AKfycbw1k4PB-Phuj8m6nXwMFxQ4ZhYv-3-CQ7WXrEmMO9xdMYFuUT_q3zIZoU8cY36L26rx/exec";


async function cargarPacks() {

    try {

        const respuesta = await fetch(API_PACKS);

        if (!respuesta.ok) {
            throw new Error("No se pudo conectar con la API");
        }

        const packs = await respuesta.json();

        mostrarPacks(packs);

    } catch (error) {

        console.error("Error cargando los packs:", error);

    }

}


function mostrarPacks(packs) {

    console.log("Packs recibidos:", packs);

}


document.addEventListener(
    "DOMContentLoaded",
    cargarPacks
);
