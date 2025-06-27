import { pedirCarta, valorCarta, crearCarta } from "./";



// turno de la computadora
/**
 * esta funcion representa el turno de la computadora
 * @param {number} puntosMinimos 
 * @param {Array<String>} deck 
 * @param {HTMLElement} divCartasComputadora 
 */

export const turnoComputadora = ( puntosMinimos, deck, divCartasComputadora) => {
    if (!puntosMinimos) throw new Error('los puntos minimos son necesarios')
        let puntosComputadora = 0;
    do {
        const carta = pedirCarta(deck);
        const puntosHTML = document.querySelectorAll('small');

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML[1].innerText = puntosComputadora;
        
        let imgCarta = crearCarta(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}