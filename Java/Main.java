package Java;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        // 1)------------------------------------------------------------------------------------------
        // Contar cuántos números pares hay en una lista
        // Dada una lista/arreglo de números, devuelve cuántos son pares.
        // - Ejemplo: [1,2,4,7] → 2
        ArrayList<Integer> numList = new ArrayList<>();
        numList.add(1);
        numList.add(2);
        numList.add(4);
        numList.add(7);
        System.out.println(searchPars(numList));


        // 2)------------------------------------------------------------------------------------------
        // Verificar si una palabra es palíndromo
        // Una palabra es palíndromo si se lee igual al revés.
        // - Ejemplo: "oso" → true, "hola" → false
        String word = "oso";
        System.out.println(isPalindrome(word));


        // 3)---------------------------------------------------------------------------------------
        //Escribe un programa que muestre por consola (con un print) los
        // números de 1 a 100 (ambos incluidos y con un salto de línea entre
        // cada impresión), sustituyendo los siguientes:
        // - Múltiplos de 3 por la palabra "fizz".
        // - Múltiplos de 5 por la palabra "buzz".
        // - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
        fizzBuzz(100);


        // 4)---------------------------------------------------------------------------------------
        // Contar cuántos números pares hay en una lista. Dada una lista/arreglo de números, 
        // devuelve cuántos son pares.
        // - Ejemplo: [1,2,4,7] → 2
        ArrayList<Integer> nums = new ArrayList<>();
        nums.add(1);
        nums.add(2);
        nums.add(4);
        nums.add(7);
        System.out.println(parsNums(nums));


        // 5)---------------------------------------------------------------------------------------
        // Sumar solo los números positivos
        // Te dan una lista. Debes sumar únicamente los números mayores a 0.
        // Ejemplo: [1, -2, 5, -9, 3] → 1 + 5 + 3 = 9
        ArrayList<Integer> numss = new ArrayList<>();
        numss.add(1);
        numss.add(-2);
        numss.add(5);
        numss.add(-9);
        numss.add(3);
        System.out.println(sumPositive(numss));


        // 6)---------------------------------------------------------------------------------------
        // Encontrar el número mayor sin usar funciones prehechas
        // Nada de max().
        // Solo comparaciones y lógica.
        int[] n = {22, 3, 55, 64, 54};
        System.out.println(numMax(n));


        // 7)---------------------------------------------------------------------------------------
        // Devolver cuántas vocales tiene una frase
        // Cuenta vocales: a, e, i, o, u (mayúsculas/minúsculas).
        // Ejemplo: "Hola Mundo" → 4
        String text = "Hello, my name is andres and i am 20 years";
        System.out.println(countVocals(text));


        // 8)---------------------------------------------------------------------------------------
        // Contar cuántos números negativos hay
        // Dado un arreglo de números, devuelve cuántos son negativos.
        // Ejemplo:
        // [-3, 5, -1, 0, 10, -7] → 3.
        int[] arr = {-3, 5, -1, 0, 10, -7};
        System.out.println(countNumsNegative(arr));


        // 9)--------------------------------------------------------------------------------------
        // Sumar solo los impares
        // Dado un arreglo de números, suma únicamente los números impares.
        // Ejemplo:
        // [1, 2, 3, 4, 5] → 1 + 3 + 5 = 9.
        int[] numbers = {1, 2, 3, 4, 5};
        System.out.println(sumImpars(numbers));


        // 10)---------------------------------------------------------------------------------------
        // Contar cuántas veces aparece un carácter
        // Dado un texto y un carácter, devuelve cuántas veces aparece ese carácter exactamente.
        // Ejemplo:
        // Texto: "programacion"
        // Carácter: "o"
        // Resultado → 2.
        String t = "programacion";
        char letter = 'o';
        System.out.println(countCharacter(t, letter));


        // 11)---------------------------------------------------------------------------------------
        // Convertir una cadena a mayúsculas sin usar .toUpperCase()
        // Debes convertir todas las letras a mayúsculas usando solo lógica (comparaciones, ASCII, condiciones).
        // No puedes usar .toUpperCase() ni .toLowerCase().
        // Ejemplo:
        // "Hola" → "HOLA".
        // (Pista: A → Z = 65 a 90, a → z = 97 a 122).
        String tex = "Hola";
        System.out.println(convertMayus(tex));


        // 12)---------------------------------------------------------------------------------------
        // Obtener la suma total de las longitudes de todas las palabras
        // Dado un texto, cuenta cuántas letras tiene en total, ignorando espacios.
        // Ejemplo:
        // "El perro corre"
        // → "El" (2) + "perro" (5) + "corre" (5) = 12.

    }

    // Funciones
   // 1)----------------------------------------------------------------------------------------------
   public static int searchPars(ArrayList<Integer> numList){
    int res = 0;
    for (int i = 0; i < numList.size(); i++) {
        if (numList.get(i) % 2 == 0) {
            res++;
        }
    }
    return res;
   }


   // 2)----------------------------------------------------------------------------------------------
   public static String isPalindrome(String word){
    StringBuilder sb = new StringBuilder(word);
    sb.reverse();
    if (word.equals(sb.toString())){
        return "Es palindorme";
    }
    return "No es palindrome";
   }


   // 3)----------------------------------------------------------------------------------------------
   public static void fizzBuzz(int num) {
    for (int i = 1; i <= num; i++) {
        if (i % 3 == 0 && i % 5 == 0 ){
            System.out.println("fizzbuzz");
        } else if (i % 3 == 0) {
            System.out.println("fizz");
        } else if (i % 5 == 0) {
            System.out.println("buzz");
        } else {
            System.out.println(i);
        }
    }
   }


   // 4)----------------------------------------------------------------------------------------------
   public static int parsNums(ArrayList<Integer> nums) {
     int res = 0;
    for(int i = 0; i < nums.size(); i++){
        if (nums.get(i) % 2 == 0) {
            res++;
        }
    }
    return res;
   }


   // 5)----------------------------------------------------------------------------------------------
    public static int sumPositive(ArrayList<Integer> nums) {
        int res = 0;
        for(int i = 0; i < nums.size(); i++){
            if(nums.get(i) > 0){
               res = res + nums.get(i);
            }
        }
        return res;
    }
    

   // 6)----------------------------------------------------------------------------------------------
    public static int numMax(int[] nums){
        int res = nums[0];
        for(int i = 0; i < nums.length; i++) {
            if(nums[i] > res) {
                res = nums[i];
            }
        }
        return res;
    }


   // 7)----------------------------------------------------------------------------------------------
   public static int countVocals(String text){
    String vocals = "aeiouAEIOU";
    int res = 0;
    for(int i = 0; i < text.length(); i++){
        for(int j = 0; j < vocals.length(); j++){
            if(text.charAt(i) == vocals.charAt(j)){
                res++;
            }
        }
    }
    return res;
   }


   // 8)----------------------------------------------------------------------------------------------
   public static int countNumsNegative(int[] nums) {
    int res = 0;
    for(int i = 0; i < nums.length; i++) {
        if(nums[i] < 0) {
            res++;
        }
    }
    return res;
   }


   // 9)----------------------------------------------------------------------------------------------
   public static int sumImpars(int[] nums){
    int res = 0;
    for(int num : nums){
        if(num % 2 == 1) {
            res = res + num;
        }
    }
    return res;
   }


   // 10)---------------------------------------------------------------------------------------------
   public static int countCharacter(String t, char letter){
    int res = 0;
    for(int i = 0; i < t.length(); i++){
        if(t.charAt(i) == letter){
            res++;
        }
    }
    return res;
   }


   // 11)---------------------------------------------------------------------------------------------
   public static String convertMayus(String t){
    var result = "";
    for(int i = 0; i < t.length(); i++) {
        var code = t.charAt(i);

        // si es es minuscula (a-z)
        if (code >= 97 && code <= 122) {
            result = result + (char) (code - 32);
        } else {
            result = result + code;
        }
    }
    return result;
   }


    // 12)---------------------------------------------------------------------------------------------
    public static int sumLength() {
        return 0;
    }
}


