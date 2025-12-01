package Java;

import java.util.ArrayList;

public class Main {

    public static void main(String[] args) {
        //PRIMER EJERCICIO:
        isValid("()[]{}");
    }

    // Funciones
    // primer ejercicio
    public static boolean isValid(String s) {
        ArrayList<String> str = new ArrayList();
        str.add(s);
        for (String element : str) {
            System.out.println(element);
        }
        return true;
    }

}
