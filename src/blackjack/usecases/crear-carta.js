


/**
 * esta funcion crea una imagen de la carta en html
 * @param {String} carta 
 * @returns {HTMLImageElement} 
 */
export const crearCarta = (carta) =>{

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');
    return imgCarta
    
}