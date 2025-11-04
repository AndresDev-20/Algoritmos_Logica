/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */
function IsAnagram(w1, w2) {
    if(w1 === w2) return false;
    const r1 = w1.toLowerCase().split("").sort().join("");
    const r2 = w2.toLowerCase().split("").sort().join("");
    if (r1 === r2) {
        return true
    }
    return false
}

console.log(IsAnagram("Amor", "Roma"))