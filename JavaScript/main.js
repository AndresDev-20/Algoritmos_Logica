// 1)---------------------------------------------------------------------------------------
// Crea una funcion que encuentre los indices de los dos numero que sumen un numero concreto
function TwoSum(nums, target) {
    for(let i = 0; i < nums.length; i++) {
        for(let j = i + 1; j < nums.length; j++) {
            if(nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return null
}
console.log(TwoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(TwoSum([2, 7, 11, 15], 90)); // null



// 2)---------------------------------------------------------------------------------------
// Crea una funcion que verifique si un numero es palindromo con true o false
function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false




// 3)---------------------------------------------------------------------------------------
//Escribe un programa que muestre por consola (con un print) los
 // * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 // * cada impresión), sustituyendo los siguientes:
 // * - Múltiplos de 3 por la palabra "fizz".
 // * - Múltiplos de 5 por la palabra "buzz".
 // * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".

function fizzBuzz() {
    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("fizzbuzz");
        } else if (i % 3 === 0) {
            console.log("fizz");
        } else if (i % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(i);
        }
    }
}

function name() {
    fizzBuzz();
}


// 4)---------------------------------------------------------------------------------------
// Contar cuántos números pares hay en una lista. Dada una lista/arreglo de números, 
// devuelve cuántos son pares.
// - Ejemplo: [1,2,4,7] → 2
function ParesCount(array) {
    let pares = 0;
    for(let i = 0; i < array.length; i++) {
        if(array[i] % 2 == 0) {
            pares ++;
        }
    }
    return pares;
}

console.log(ParesCount([1,2,3,4,5,6]))


// 5)---------------------------------------------------------------------------------------
// Sumar solo los números positivos
// Te dan una lista. Debes sumar únicamente los números mayores a 0.
// Ejemplo: [1, -2, 5, -9, 3] → 1 + 5 + 3 = 9
function addNumbersPositive(arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > 0) {
            sum = sum + arr[i];
        }
    }
    return sum;
}

console.log(addNumbersPositive([1, -2, 5, -9, 3]));


// 6)---------------------------------------------------------------------------------------
// Encontrar el número mayor sin usar funciones prehechas
// Nada de max().
// Solo comparaciones y lógica.
const list = [2, 5, 4, 70, 9, 50];
let ar = list[0];
for(let i = 0; i < list.length; i++) {
    if(list[i] > ar){
        ar = list[i]
    }
}
console.log(ar);


// 7)---------------------------------------------------------------------------------------
// Devolver cuántas vocales tiene una frase
// Cuenta vocales: a, e, i, o, u (mayúsculas/minúsculas).
// Ejemplo: "Hola Mundo" → 4
function searchVocals(text) {
    const vocals = "aeiouAEIOU";
    const arr = text.split('');
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if (vocals.includes(arr[i])) {
            count++;
        }
    }
    return count;
    
}
console.log(searchVocals("El perro y el gato estan peleando"));


// 8)---------------------------------------------------------------------------------------
// Contar cuántos números negativos hay
// Dado un arreglo de números, devuelve cuántos son negativos.
// Ejemplo:
// [-3, 5, -1, 0, 10, -7] → 3.

function countNegative(array) {
    let count = 0;
    for(let i = 0; i < array.length; i++){
        if(array[i] < 0) {
            count ++;
        }
    }
    return count;
}
console.log(countNegative([-3, 5, -1, 0, 10, -7]));


// 9)--------------------------------------------------------------------------------------
// Sumar solo los impares
// Dado un arreglo de números, suma únicamente los números impares.
// Ejemplo:
// [1, 2, 3, 4, 5] → 1 + 3 + 5 = 9.

function sumImpar(arr){
    let res = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 1){
            res = res + arr[i];
        }
    }
    return res;
}
console.log(sumImpar([1, 2, 3, 4, 5]));


// 10)---------------------------------------------------------------------------------------
// Contar cuántas veces aparece un carácter
// Dado un texto y un carácter, devuelve cuántas veces aparece ese carácter exactamente.
// Ejemplo:
// Texto: "programacion"
// Carácter: "o"
// Resultado → 2.
function countChar(text, char){
    let res = 0;
    for (const element of text) {
        if(element === char){
            res++;
        }
    }
    return res;
}
console.log(countChar("programacion", "o"));


// 11)---------------------------------------------------------------------------------------
// Convertir una cadena a mayúsculas sin usar .toUpperCase()
// Debes convertir todas las letras a mayúsculas usando solo lógica (comparaciones, ASCII, condiciones).
// No puedes usar .toUpperCase() ni .toLowerCase().
// Ejemplo:
// "Hola" → "HOLA".
// (Pista: A → Z = 65 a 90, a → z = 97 a 122).
function mayusText(text) {
    let result = "";

    for (let i = 0; i < text.length; i++) {
        let code = text.charCodeAt(i);

        // si es minúscula (a–z)
        if (code >= 97 && code <= 122) {
            result += String.fromCharCode(code - 32);
        } else {
            result += text[i];
        }
    }

    return result;
}

console.log(mayusText("Hola"));


// 12)---------------------------------------------------------------------------------------
// Obtener la suma total de las longitudes de todas las palabras
// Dado un texto, cuenta cuántas letras tiene en total, ignorando espacios.
// Ejemplo:
// "El perro corre"
// → "El" (2) + "perro" (5) + "corre" (5) = 12.
function countLength(str){
    let res = str.replaceAll(" ", "");
    return res.length;
}
console.log(countLength("El perro corre"));


// 13)---------------------------------------------------------------------------------------
// Contar cuántos números son mayores que un valor
// Dado un arreglo de números y un número x, devuelve cuántos elementos del
// arreglo son mayores que x.
// Ejemplo:
// Lista: [2, 5, 10, 3, 8]
// x = 4
// Resultado → 3 (5, 10, 8)
const nums = [2, 5, 10, 2, 8];
let num = 4;

function numElderly(ns, n){
    let res = 0;
    for(let i = 0; i < ns.length; i++) {
        if(ns[i] > n) {
            res++;
        }
    }
    return res;
}
console.log(numElderly(nums, num));


// 14)---------------------------------------------------------------------------------------
// Encontrar el número menor
// Dado un arreglo de números, encuentra el número más pequeño sin usar funciones prehechas.
// Ejemplo:
// [7, 2, 9, 1, 5] → 1.
const n = [7, 2, 9, 1, 5];
function numMinur(arr){
    let res = arr[0];
    for(let i = 0; i < arr.length; i++ ) {
        if(res > arr[i]){
            res = arr[i]
        }
    }

    return res;
}

console.log("res" + numMinur(n));



// 15)---------------------------------------------------------------------------------------
// Contar palabras en una frase
// Dado un texto, devuelve cuántas palabras tiene.
// Ejemplo:
// "Java y Python son geniales" → 5.
// (Regla: palabras separadas por espacios).
const cadena = "Java y Python son geniales";
function countWord(c){
    let res = c.split(" ").length
    return res;
}

console.log(countWord(cadena));


// 16)---------------------------------------------------------------------------------------
// Verificar si todos los números son positivos
// Dado un arreglo, devuelve true si todos los números son mayores que 0
// Si hay al menos uno negativo o cero, devuelve false.
// Ejemplo:
// [1, 3, 5] → true
// [1, -2, 5] → false.
const arr1 = [1, 3, 5];
const arr2 = [1, -2, 5];
function isPositiveOrNegative(arr){
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            return false
        }
    }
    return true
}

console.log(isPositiveOrNegative(arr1));
console.log(isPositiveOrNegative(arr2));


// 17)---------------------------------------------------------------------------------------
// Repetir una palabra n veces
// Dada una palabra y un número number, devuelve la palabra repetida n veces.
// Ejemplo:
// Palabra: "Hola"
// number = 3
// Resultado → "HolaHolaHola".
let number = 3;
let word = "Hola"
function wordRepeat(n, w){
    let res = "";
    for(let i = 0; i < n; i++) {
        res = res + w;
    }
    return res
}
console.log(wordRepeat(number, word));


// ============================================================
// 18) Invertir un texto sin usar reverse()
// ============================================================
// Crea una función que reciba un texto y devuelva el texto
// completamente invertido.
//
// NO puedes utilizar:
// reverse()
//
// Ejemplo:
// "Hola mundo" → "odnum aloH"
//
// Otro ejemplo:
// "JavaScript" → "tpircSavaJ"



function reverseText(text) {

    // Tu código aquí

}



// ============================================================
// 19) Encontrar el segundo número más grande
// ============================================================
// Dado un arreglo de números, encuentra el segundo número
// más grande.
//
// NO puedes utilizar:
// Math.max()
// sort()
//
// Ejemplo:
// [10, 5, 8, 20, 15]
// → 15
//
// Extra:
// Intenta resolverlo recorriendo el arreglo una sola vez.



function secondLargest(arr) {

    // Tu código aquí

}



// ============================================================
// 20) Eliminar duplicados
// ============================================================
// Crea una función que reciba un arreglo y devuelva otro
// arreglo sin elementos repetidos.
//
// Ejemplo:
// [1, 2, 2, 3, 4, 4, 5]
// → [1, 2, 3, 4, 5]
//
// Otro:
// ["java", "python", "java", "js", "python"]
// → ["java", "python", "js"]
//
// Restricción:
// Intenta hacerlo primero SIN utilizar Set.



function removeDuplicates(arr) {

    // Tu código aquí

}



// ============================================================
// ===================== INTERMEDIO ============================
// ============================================================



// ============================================================
// 21) Frecuencia de elementos
// ============================================================
// Dado un arreglo, determina cuántas veces aparece cada elemento.
//
// Ejemplo:
// [1, 2, 2, 3, 1, 2, 4]
//
// Resultado esperado:
//
// {
//     1: 2,
//     2: 3,
//     3: 1,
//     4: 1
// }



function elementFrequency(arr) {

    // Tu código aquí

}



// ============================================================
// 22) Primer carácter que no se repite
// ============================================================
// Dado un string, encuentra el primer carácter que aparece
// una sola vez.
//
// Ejemplo:
// "aabbcdde"
// → "c"
//
// Si todos se repiten:
// "aabbcc"
// → null



function firstUniqueCharacter(text) {

    // Tu código aquí

}



// ============================================================
// 23) Verificar si dos palabras son anagramas
// ============================================================
// Dos palabras son anagramas si contienen las mismas letras
// con la misma frecuencia.
//
// Ejemplo:
// "listen"
// "silent"
// → true
//
// Ejemplo:
// "hola"
// "mundo"
// → false
//
// Extra:
// Intenta resolverlo SIN utilizar sort().



function areAnagrams(word1, word2) {

    // Tu código aquí

}



// ============================================================
// 24) Encontrar elementos en común
// ============================================================
// Dados dos arrays, devuelve los elementos que aparecen
// en ambos.
//
// Ejemplo:
//
// A = [1, 2, 3, 4]
// B = [3, 4, 5, 6]
//
// Resultado:
// [3, 4]
//
// Evita devolver elementos duplicados.



function intersection(arr1, arr2) {

    // Tu código aquí

}



// ============================================================
// 25) Rotar un array
// ============================================================
// Crea una función que rote los elementos de un array
// N posiciones hacia la derecha.
//
// Ejemplo:
//
// [1, 2, 3, 4, 5]
// n = 2
//
// Resultado:
// [4, 5, 1, 2, 3]
//
// Otro:
//
// [1, 2, 3]
// n = 1
//
// Resultado:
// [3, 1, 2]



function rotateArray(arr, n) {

    // Tu código aquí

}



// ============================================================
// 26) Encontrar el número faltante
// ============================================================
// Tienes números del 1 al N, pero falta uno.
//
// Encuentra cuál.
//
// Ejemplo:
//
// [1, 2, 3, 5, 6]
// → 4
//
// Otro:
//
// [1, 2, 4, 5]
// → 3
//
// Extra:
// Intenta resolverlo sin ordenar el array.



function missingNumber(arr) {

    // Tu código aquí

}



// ============================================================
// 27) Mover todos los ceros al final
// ============================================================
// Dado un array, mueve todos los ceros al final manteniendo
// el orden de los demás elementos.
//
// Ejemplo:
//
// [0, 1, 0, 3, 12]
//
// Resultado:
//
// [1, 3, 12, 0, 0]



function moveZeros(arr) {

    // Tu código aquí

}



// ============================================================
// 28) Todos los pares que suman un objetivo
// ============================================================
// Dado un array y un objetivo, devuelve TODOS los pares
// de números cuya suma sea igual al objetivo.
//
// Ejemplo:
//
// [2, 4, 3, 5, 7]
// target = 7
//
// Resultado:
//
// [2, 5]
// [4, 3]
//
// Intenta pensar cómo evitar comparar absolutamente todo
// con todo.



function findPairs(arr, target) {

    // Tu código aquí

}



// ============================================================
// 29) Palíndromo avanzado
// ============================================================
// Determina si una frase es un palíndromo.
//
// Debes ignorar:
// - Espacios
// - Mayúsculas/minúsculas
// - Signos de puntuación
//
// Ejemplo:
//
// "Anita lava la tina"
// → true
//
// "A man, a plan, a canal: Panama"
// → true



function advancedPalindrome(text) {

    // Tu código aquí

}



// ============================================================
// 30) Comprimir una cadena
// ============================================================
// Dado un string, agrupa caracteres consecutivos iguales.
//
// Ejemplo:
//
// "aaabbccccd"
// → "a3b2c4d1"
//
// Otro:
//
// "xxxzzzzyaa"
// → "x3z4y1a2"



function compressString(text) {

    // Tu código aquí

}



// ============================================================
// 31) Validar paréntesis
// ============================================================
// Determina si una expresión tiene sus símbolos correctamente
// balanceados.
//
// Debes soportar:
//
// ()
// []
// {}
//
// Ejemplos:
//
// "{[()]}"
// → true
//
// "(()"
// → false
//
// ")("
// → false
//
// "{[}]"
// → false



function validateBrackets(text) {

    // Tu código aquí

}



// ============================================================
// 32) Encontrar la palabra más larga
// ============================================================
// Dado un texto, encuentra la palabra más larga.
//
// Ejemplo:
//
// "JavaScript es extremadamente poderoso"
//
// Resultado:
// "extremadamente"
//
// Si existen dos palabras con la misma longitud,
// devuelve la primera.



function longestWord(text) {

    // Tu código aquí

}



// ============================================================
// 33) Invertir el orden de las palabras
// ============================================================
// NO debes invertir los caracteres.
//
// Debes invertir únicamente el orden de las palabras.
//
// Ejemplo:
//
// "Hola mundo desde JavaScript"
//
// Resultado:
//
// "JavaScript desde mundo Hola"



function reverseWords(text) {

    // Tu código aquí

}



// ============================================================
// 34) Agrupar números pares e impares
// ============================================================
// Dado un array, devuelve dos grupos:
//
// {
//     pares: [...],
//     impares: [...]
// }
//
// Ejemplo:
//
// [1, 2, 3, 4, 5, 6]
//
// Resultado:
//
// {
//     pares: [2, 4, 6],
//     impares: [1, 3, 5]
// }



function groupEvenOdd(arr) {

    // Tu código aquí

}



// ============================================================
// 35) Buscar una palabra dentro de un texto
// ============================================================
// Crea una función que determine si una palabra aparece
// dentro de un texto.
//
// Debe ignorar mayúsculas y minúsculas.
//
// Ejemplo:
//
// Texto:
// "JavaScript es un lenguaje poderoso"
//
// Buscar:
// "JAVASCRIPT"
//
// Resultado:
// true
//
// Otro:
//
// Buscar:
// "JavaRuby"
//
// Resultado:
// false



function containsWord(text, word) {

    // Tu código aquí

}



// ============================================================
// 36) Ordenamiento Bubble Sort
// ============================================================
// Implementa Bubble Sort desde cero.
//
// NO puedes utilizar:
//
// sort()
//
// Ejemplo:
//
// [5, 2, 8, 1, 3]
//
// Resultado:
//
// [1, 2, 3, 5, 8]



function bubbleSort(arr) {

    // Tu código aquí

}



// ============================================================
// 37) Búsqueda binaria
// ============================================================
// Dado un array ORDENADO, implementa Binary Search.
//
// Ejemplo:
//
// [1, 3, 5, 7, 9, 11, 15]
//
// Buscar:
// 9
//
// Resultado:
// 4
//
// Si no existe:
//
// Buscar:
// 10
//
// Resultado:
// -1
//
// IMPORTANTE:
// No debes recorrer todo el array con un for.
// Debes aprovechar que el array está ordenado.



function binarySearch(arr, target) {

    // Tu código aquí

}



// ============================================================
// 38) Encontrar el número más frecuente
// ============================================================
// Dado un array, encuentra el número que aparece más veces.
//
// Ejemplo:
//
// [1, 3, 2, 3, 4, 3, 2]
//
// Resultado:
// 3
//
// Si hay empate, devuelve el primero que alcance
// la frecuencia máxima.



function mostFrequentNumber(arr) {

    // Tu código aquí

}



// ============================================================
// 39) Intersección de intervalos
// ============================================================
// Dado un conjunto de intervalos, combina aquellos que
// se superponen.
//
// Ejemplo:
//
// [
//     [1, 3],
//     [2, 6],
//     [8, 10],
//     [9, 12]
// ]
//
// Resultado:
//
// [
//     [1, 6],
//     [8, 12]
// ]



function mergeIntervals(intervals) {

    // Tu código aquí

}



// ============================================================
// 40) Sistema de inventario
// ============================================================
// Tienes productos:
//
// [
//     { nombre: "Laptop", precio: 3000, stock: 5 },
//     { nombre: "Mouse", precio: 50, stock: 20 },
//     { nombre: "Teclado", precio: 100, stock: 0 }
// ]
//
// Crea funciones para:
//
// 1. Encontrar productos sin stock.
// 2. Calcular el valor total del inventario.
// 3. Encontrar el producto más caro.
// 4. Buscar un producto por nombre.
// 5. Agregar stock a un producto.
//
// Aquí debes trabajar con arrays de objetos.



const inventory = [
    { nombre: "Laptop", precio: 3000, stock: 5 },
    { nombre: "Mouse", precio: 50, stock: 20 },
    { nombre: "Teclado", precio: 100, stock: 0 }
];


function productsWithoutStock(products) {

    // Tu código aquí

}


function totalInventoryValue(products) {

    // Tu código aquí

}


function mostExpensiveProduct(products) {

    // Tu código aquí

}


function findProduct(products, name) {

    // Tu código aquí

}


function addStock(products, name, quantity) {

    // Tu código aquí

}



// ============================================================
// ======================= DIFÍCIL =============================
// ============================================================



// ============================================================
// 41) LRU Cache
// ============================================================
// Implementa una estructura que almacene únicamente los
// últimos N elementos utilizados.
//
// Ejemplo:
//
// capacidad = 3
//
// A
// B
// C
//
// → [A, B, C]
//
// Accedemos a A:
//
// → [B, C, A]
//
// Agregamos D:
//
// → [C, A, D]
//
// El elemento menos recientemente utilizado debe eliminarse.



class LRUCache {

    constructor(capacity) {

        // Tu código aquí

    }

    get(key) {

        // Tu código aquí

    }

    put(key, value) {

        // Tu código aquí

    }

}



// ============================================================
// 42) Longest Substring Without Repeating Characters
// ============================================================
// Dado un string, encuentra la longitud de la subcadena
// más larga que no tenga caracteres repetidos.
//
// Ejemplo:
//
// "abcabcbb"
// → 3
//
// Porque:
//
// "abc"
//
// Otro:
//
// "bbbbb"
// → 1
//
// Otro:
//
// "pwwkew"
// → 3
//
// Intenta utilizar una estrategia de Sliding Window.



function longestUniqueSubstring(text) {

    // Tu código aquí

}



// ============================================================
// 43) Tres números que sumen cero
// ============================================================
// Dado:
//
// [-1, 0, 1, 2, -1, -4]
//
// Encuentra todas las combinaciones de tres números cuya
// suma sea 0.
//
// Resultado esperado:
//
// [
//     [-1, -1, 2],
//     [-1, 0, 1]
// ]
//
// No puedes devolver combinaciones duplicadas.



function threeSum(arr) {

    // Tu código aquí

}



// ============================================================
// 44) Detectar ciclo en una lista enlazada
// ============================================================
// Crea una estructura de lista enlazada:
//
// A → B → C → D
//         ↑   |
//         |___|
//
// Determina si existe un ciclo.
//
// No puedes solucionar el problema simplemente dejando
// que el programa entre en un loop infinito.
//
// Extra:
// Intenta resolverlo utilizando el algoritmo de
// Floyd (Slow/Fast Pointers).



class Node {

    constructor(value) {

        this.value = value;
        this.next = null;

    }

}


function hasCycle(head) {

    // Tu código aquí

}



// ============================================================
// 45) Generar todas las permutaciones
// ============================================================
// Dada una palabra, genera todas sus posibles permutaciones.
//
// Ejemplo:
//
// "abc"
//
// Resultado:
//
// [
//     "abc",
//     "acb",
//     "bac",
//     "bca",
//     "cab",
//     "cba"
// ]
//
// Debes utilizar recursividad/backtracking.



function permutations(text) {

    // Tu código aquí

}



// ============================================================
// 46) Resolver un laberinto
// ============================================================
// Representa un laberinto mediante una matriz:
//
// 0 = camino
// 1 = pared
//
// Ejemplo:
//
// [
//     [0, 0, 1, 0],
//     [1, 0, 1, 0],
//     [0, 0, 0, 0],
//     [0, 1, 1, 0]
// ]
//
// Inicio:
//
// [0, 0]
//
// Final:
//
// [3, 3]
//
// Determina si existe un camino.
//
// EXTRA:
// Devuelve el camino realizado.
//
// Puedes utilizar:
// DFS
// BFS



function solveMaze(maze, start, end) {

    // Tu código aquí

}



// ============================================================
// 47) Sistema de dependencias
// ============================================================
// Tienes tareas:
//
// [
//     ["A", "B"],
//     ["B", "C"],
//     ["C", "D"]
// ]
//
// Significa:
//
// A depende de B
// B depende de C
// C depende de D
//
// Un orden válido sería:
//
// D → C → B → A
//
// Pero si tenemos:
//
// [
//     ["A", "B"],
//     ["B", "C"],
//     ["C", "A"]
// ]
//
// Existe un ciclo:
//
// A → B → C → A
//
// En ese caso no es posible completar las tareas.
//
// Debes detectar el ciclo y devolver el orden cuando
// sea posible.
//
// Conceptos:
// Graph
// Topological Sort



function resolveDependencies(dependencies) {

    // Tu código aquí

}



// ============================================================
// 48) Dijkstra — Camino más corto
// ============================================================
// Tienes ciudades conectadas:
//
// const graph = {
//     A: { B: 4, C: 2 },
//     B: { A: 4, C: 1, D: 5 },
//     C: { A: 2, B: 1, D: 8 },
//     D: { B: 5, C: 8 }
// };
//
// Encuentra el camino más corto desde:
//
// A → D
//
// Debes devolver:
//
// - Distancia mínima
// - Camino realizado
//
// Resultado esperado:
//
// Distancia: 7
//
// Camino:
// A → C → B → D
//
// Implementa el algoritmo de Dijkstra.



function dijkstra(graph, start, end) {

    // Tu código aquí

}



// ============================================================
// 49) Sudoku Validator
// ============================================================
// Crea una función que determine si un tablero de Sudoku
// es válido.
//
// Debes verificar:
//
// 1. Filas
// 2. Columnas
// 3. Cuadrados 3x3
//
// Un tablero parcialmente lleno también puede ser válido.
//
// Ejemplo conceptual:
//
// [
//     ["5","3",".",".","7",".",".",".","."],
//     ["6",".",".","1","9","5",".",".","."],
//     [".","9","8",".",".",".",".","6","."],
//     ...
// ]
//
// Devuelve:
//
// true
//
// Si existe algún número repetido donde no debe:
//
// false
//
// IMPORTANTE:
// No necesitas resolver el Sudoku.
// Solamente validar si es correcto.



function validateSudoku(board) {

    // Tu código aquí

}



// ============================================================
// 50) MINI MOTOR DE EXPRESIONES MATEMÁTICAS
// ============================================================
// ESTE ES EL RETO FINAL.
//
// Crea una función capaz de recibir una expresión matemática
// como string y devolver su resultado.
//
// Ejemplo:
//
// "10 + 5 * 2"
// → 20
//
// Debe respetar la prioridad matemática:
//
// 1. ( )
// 2. *
// 3. /
// 4. +
// 5. -
//
// Ejemplos:
//
// "2 + 3 * 4"
// → 14
//
// "(2 + 3) * 4"
// → 20
//
// "10 / 2 + 3"
// → 8
//
// "2 * (3 + 4) - 5"
// → 9
//
// ============================================================
//
// RESTRICCIÓN ABSOLUTA:
//
// NO PUEDES UTILIZAR:
//
// eval()
//
// Tampoco puedes simplemente delegar todo el cálculo
// al motor de JavaScript.
//
// Debes construir tu propia lógica.
//
// Este ejercicio debería hacerte trabajar con:
//
// - Strings
// - Tokens
// - Números
// - Operadores
// - Paréntesis
// - Pilas
// - Precedencia
// - Algoritmos
//
// EXTRA:
//
// Intenta soportar también números negativos.
//
// Ejemplo:
//
// "-5 + 3"
// → -2
//
// Y decimales:
//
// "2.5 * 4"
// → 10



function evaluateExpression(expression) {

    // Tu código aquí

}



// ============================================================
// FIN DE LOS 50 EJERCICIOS
// ============================================================
//
// NIVEL:
//
// 1 - 20   → BÁSICO
// 21 - 40  → INTERMEDIO
// 41 - 50  → DIFÍCIL
//
// ============================================================