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
console.log(TwoSum([2, 7, 11, 15], 9)); // [0, 1]
console.log(TwoSum([2, 7, 11, 15], 90)); // null



// Segundo ejercicio
// Crea una funcion que verifique si un numero es palindromo con true o false
function isPalindrome(num) {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}
console.log(isPalindrome(121)); // true
console.log(isPalindrome(123)); // false



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
console.log(longestCommonPrefix(["flower","flow","flight"])); // "fl"
console.log(longestCommonPrefix(["dog","racecar","car"])); // ""    