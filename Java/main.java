package Java;

import java.util.Arrays;
import java.util.HashMap;
import java.util.Map;

public class main {

    /**
     * Finds the indices of two numbers in an array that sum up to a specific target.
     *
     * @param nums The array of integers.
     * @param target The target sum.
     * @return An array containing the indices of the two numbers, or null if no such pair is found.
     */
    public static int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> numMap = new HashMap<>();
        for (int i = 0; i < nums.length; i++) {
            int complement = target - nums[i];
            if (numMap.containsKey(complement)) {
                return new int[]{numMap.get(complement), i};
            }
            numMap.put(nums[i], i);
        }
        return null;
    }

    /**
     * Checks if a number is a palindrome.
     *
     * @param num The integer to check.
     * @return true if the number is a palindrome, false otherwise.
     */
    public static boolean isPalindrome(int num) {
        String str = String.valueOf(num);
        String reversedStr = new StringBuilder(str).reverse().toString();
        return str.equals(reversedStr);
    }

    public static void Main(String[] args) {
        // Primer ejercicio: twoSum
        System.out.println("--- Primer ejercicio: twoSum ---");
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 9)));   // Expected: [0, 1]
        System.out.println(Arrays.toString(twoSum(new int[]{2, 7, 11, 15}, 90)));  // Expected: null
        System.out.println(Arrays.toString(twoSum(new int[]{3, 2, 4}, 6)));      // Expected: [1, 2]
        System.out.println(Arrays.toString(twoSum(new int[]{3, 3}, 6)));         // Expected: [0, 1]
        System.out.println();

        // Segundo ejercicio: isPalindrome
        System.out.println("--- Segundo ejercicio: isPalindrome ---");
        System.out.println(isPalindrome(121));  // Expected: true
        System.out.println(isPalindrome(123));  // Expected: false
        System.out.println(isPalindrome(1221)); // Expected: true
        System.out.println(isPalindrome(-121)); // Expected: false (since -121 != 121-)
        System.out.println(isPalindrome(0));    // Expected: true
        System.out.println();

        // Tercer ejercicio: Desafío (aún no implementado, puedes añadirlo aquí)
        System.out.println("--- Tercer ejercicio: Desafío ---");
        System.out.println("Este es el espacio para tu ejercicio desafiante.");
    }
}