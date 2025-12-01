// Primer ejercicio
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
//console.log(TwoSum([2, 7, 11, 15], 9)); // [0, 1]
//console.log(TwoSum([2, 7, 11, 15], 90)); // null



// Segundo ejercicio
// Crea una funcion que verifique si un numero es palindromo con true o false
function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
//console.log(isPalindrome(121)); // true
//console.log(isPalindrome(123)); // false



// Tercer ejercicio

function longestCommonPrefix(strs) {
    let prefix = strs[0];
	for(let i = 0; i < strs.length; i++){
		const res1 = strs[i]
		while(res1.indexOf(prefix) !== 0 ){
			prefix = prefix.slice(0, -1);
			if(prefix === "") return "";
		}
	}

	return prefix;
};
//console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
//console.log(longestCommonPrefix(["dog","racecar","car"])); // ""    



/*
Escribe un programa que muestre por consola (con un print) los
 * números de 1 a 100 (ambos incluidos y con un salto de línea entre
 * cada impresión), sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

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

/*function name() {
    fizzBuzz();
}*/



/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
determine if the input string is valid.
An input string is valid if:

1- Open brackets must be closed by the same type of brackets.
2- Open brackets must be closed in the correct order.
3- Every close bracket has a corresponding open bracket of the same type.

Example 1:
Input: s = "()"
Output: true

Example 2:
Input: s = "()[]{}"
Output: true

Example 3:
Input: s = "(]"
Output: false

Example 4:
Input: s = "([])"
Output: true

Example 5:
Input: s = "([)]"
Output: false
*/

function isValid(s) {
    const stack = [];
    const pairs = {
        ')': '(',
        ']': '[',
        '}': '{'
    };

    for (let char of s) {
        // Si es un cierre
        if (pairs[char]) {
            const top = stack.pop();
            if (top !== pairs[char]) {
                return false;
            }
        } else {
            // Si es apertura
            stack.push(char);
        }
    }

    return stack.length === 0;
}

console.log(isValid("()"));        // true
console.log(isValid("()[]{}"));    // true
console.log(isValid("(]"));        // false
console.log(isValid("([])"));      // true
console.log(isValid("([)]"));      // false
