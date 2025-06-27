
/**
 * esta funcion le asigna un valor a la carta que recibe
 * @param {String} carta 
 * @returns {Number}
 */
export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    console.log(valor);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}