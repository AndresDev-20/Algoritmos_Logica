package Java;

import java.util.ArrayList;
import java.util.Arrays;

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
    
    return "";
   }

}
