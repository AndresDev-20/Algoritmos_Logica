package Java;

import java.util.ArrayList;
import java.util.Arrays;

public class Main {

    public static void main(String[] args) {
        //1. Contar cuántos números pares hay en una lista
        // Dada una lista/arreglo de números, devuelve cuántos son pares.
        // - Ejemplo: [1,2,4,7] → 2
        int[] array = {2,3,5,6,8};
        ArrayList<Integer> pares = new ArrayList<>();
        for (int i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                pares.add(array[i]);
            }
        }
        System.out.print(pares.size());
        System.out.println("Fin");

        //2. Verificar si una palabra es palíndromo
        // Una palabra es palíndromo si se lee igual al revés.
        // - Ejemplo: "oso" → true, "hola" → false
        System.out.println(isPalindrome("SOo", "Oso"));
        
    }

    // Funciones
    public static boolean isPalindrome(String wordOne, String wordTwo) {
        if (wordOne == wordTwo){
            return false;
        }
        String[] caracteres = wordOne.split("");
        String[] caracterestwo = wordTwo.split("");
        Arrays.sort(caracteres);
        Arrays.sort(caracterestwo);
        System.out.println(Arrays.toString(caracterestwo));
        return true;
    }

}
