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
        if(arr[i] % 2 === 1){
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
    let res = list[0];
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


// 15)---------------------------------------------------------------------------------------
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

