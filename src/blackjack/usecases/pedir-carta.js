/**
 * esta funcion pide una carta del deck
 * @param {Array<String>} deck 
 * @returns {String}
 */
export const pedirCarta = (deck) => {

    if (!deck || deck.length === 0 ) {
        throw 'No hay cartas en el deck';
    }
    const carta = deck.pop();
    return carta;
}