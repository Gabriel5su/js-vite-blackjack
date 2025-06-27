import _ from 'underscore';

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta ejemplo ['C','D','H','S']
 * @param {Array<String>} tiposEspeciales ejemplo ['A','J','Q','K']
 * @returns {Array<String>} retorna un nuevo deck de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta) throw new Error('tiposDeCarta es obligatorio')
    if (tiposDeCarta.length === 0) throw new Error('tiposDeCarta debe ser un arreglo de strings')
    if (!tiposEspeciales) throw new Error('tiposEspeciales es obligatorio')
    if (tiposEspeciales.length === 0) throw new Error('tiposEspeciales debe ser un arreglo de strings')

    let deck  = [];

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of tiposEspeciales) {
            deck.push( esp + tipo);
        }
    }
    // console.log( deck );
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}