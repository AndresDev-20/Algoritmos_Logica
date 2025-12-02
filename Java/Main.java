package Java;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        //1. Contar cuántos números pares hay en una lista
        // Dada una lista/arreglo de números, devuelve cuántos son pares.
        // Ejemplo: [1,2,4,7] → 2
        int[] array = {2,3,5,6,8};
        ArrayList<Integer> pares = new ArrayList<>();
        for (int i = 0; i < array.length; i++) {
            if (array[i] % 2 == 0) {
                pares.add(array[i]);
            }
        }
        System.out.print(pares.size());
    }

    // Funciones
    
}
