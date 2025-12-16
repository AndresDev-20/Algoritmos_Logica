# 1)---------------------------------------------------------------------------------------
# Crea una funcion que encuentre los indices de los dos numero que sumen un numero concreto
def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return (i, j)
    return None

print(two_sum([2, 7, 11, 15], 9))  # (0, 1)
print(two_sum([2, 7, 11, 15], 90))  # None



# 2)---------------------------------------------------------------------------------------
# Crea una funcion que verifique si un numero es palindromo con true o false
def is_palindrome(num):
    s = str(num)
    return s == s[::-1]

print(is_palindrome(121))  # True
print(is_palindrome(123))  # False



# 3)----------------------------------------------------------------------------------------
# Escribe un programa que muestre por consola (con un print) los
# números de 1 a 100 (ambos incluidos y con un salto de línea entre
# cada impresión), sustituyendo los siguientes:
# - Múltiplos de 3 por la palabra "fizz".
# - Múltiplos de 5 por la palabra "buzz".
# - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
def fizz_buzz():
    for i in range(1, 101):
        if i % 3 == 0 and i % 5 == 0:
            print("fizzbuzz")
        elif i % 3 == 0:
            print("fizz")
        elif i % 5 == 0:
            print("buzz")
        else:
            print(i)

def name():
    fizz_buzz()


# 4)----------------------------------------------------------------------------------------
 # Crea una única función (importante que sólo sea una) que sea capaz
 # de calcular y retornar el área de un polígono.
 # - La función recibirá por parámetro sólo UN polígono a la vez.
 # - Los polígonos soportados serán Triángulo, Cuadrado y Rectángulo.
 # - Imprime el cálculo del área de un polígono de cada tipo.
 
def polygon_area(poligono):
    match poligono:
        case "TRIANGULO":
            base = int(input("Ingresa la base: "))
            altura = int(input("Ingresa la altura"))
            print((base * altura)  / 2)
        case "CUADRADO":
            lado = int(input("Ingresa la medida: "))
            print(lado * 4)
        case "RECTANGULO":
            base = int(input("Ingresa la base: "))
            altura = int(input("Ingresa la altura"))
            print(base * altura)

#polygon_area("CUADRADO")



# 5)----------------------------------------------------------------------------------------
 # Crea un programa que invierta el orden de una cadena de texto
 # sin usar funciones propias del lenguaje que lo hagan de forma automática.
 # - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"

def reverce_string(cadena):
    res = cadena[::-1]
    print(res)

reverce_string("Andres")


# 6)----------------------------------------------------------------------------------------
# Contar cuántos números pares hay en una lista. Dada una lista/arreglo de números, 
# devuelve cuántos son pares.
# - Ejemplo: [1,2,4,7] → 2
def count_positive(nums):
    res = 0;
    for num in nums:
        if num % 2 == 0:
            res += 1
    return res;

print(count_positive([1, 2, 4, 7]))


# 7)----------------------------------------------------------------------------------------
# Sumar solo los números positivos
# Te dan una lista. Debes sumar únicamente los números mayores a 0.
# Ejemplo: [1, -2, 5, -9, 3] → 1 + 5 + 3 = 9