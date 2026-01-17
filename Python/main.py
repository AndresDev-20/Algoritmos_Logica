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
            res += 1;
    return res;

print(count_positive([1, 2, 4, 7]))


# 7)----------------------------------------------------------------------------------------
# Sumar solo los números positivos
# Te dan una lista. Debes sumar únicamente los números mayores a 0.
# Ejemplo: [1, -2, 5, -9, 3] → 1 + 5 + 3 = 9
def positive_sum(nums):
    res = 0;
    for num in nums:
        if num > 0:
            res = res + num;
    return res;

print(positive_sum([1, -2, 5, -9, 3]))


# 6)---------------------------------------------------------------------------------------
# Encontrar el número mayor sin usar funciones prehechas
# Nada de max().
# Solo comparaciones y lógica.
nums = [2, 4, 6, 12, 11, 5];
n = nums[0]
for num in nums:
    if(num > n):
        n = num;

print(n)


# 7)---------------------------------------------------------------------------------------
# Devolver cuántas vocales tiene una frase
# Cuenta vocales: a, e, i, o, u (mayúsculas/minúsculas).
# Ejemplo: "Hola Mundo" → 4
text = "Hola Mundo"
def count_vocals(text):
    vocals = "aeiouAEIOU"
    res = 0
    for char in text:
        if char in vocals:
            res += 1

    return res

print(count_vocals(text))


# 8)---------------------------------------------------------------------------------------
# Contar cuántos números negativos hay
# Dado un arreglo de números, devuelve cuántos son negativos.
# Ejemplo:
# [-3, 5, -1, 0, 10, -7] → 3.
nums = [-3, 5, -1, 0, 10, -7]
def count_negative(arr):
    count = 0
    for num in arr:
        if num < 0:
            count += 1
    return count

print(count_negative(nums))


# 9)--------------------------------------------------------------------------------------
# Sumar solo los impares
# Dado un arreglo de números, suma únicamente los números impares.
# Ejemplo:
# [1, 2, 3, 4, 5] → 1 + 3 + 5 = 9.
nums = [1, 2, 3, 4, 5]
def sum_impars(arr):
    res = 0;
    for num in arr:
        if num % 2 == 1:
            res = res + num
    return res

print(sum_impars(nums))


# 10)---------------------------------------------------------------------------------------
# Contar cuántas veces aparece un carácter
# Dado un texto y un carácter, devuelve cuántas veces aparece ese carácter exactamente.
# Ejemplo:
# Texto: "programacion"
# Carácter: "o"
# Resultado → 2.
text = "programacion"
char = "o"
def count_char(text, char):
    res = 0
    for t in text:
        if t == char:
            res +=1
    return res

print(count_char(text, char))


# 11)---------------------------------------------------------------------------------------
# Convertir una cadena a mayúsculas sin usar .toUpperCase()
# Debes convertir todas las letras a mayúsculas usando solo lógica (comparaciones, ASCII, condiciones).
# No puedes usar .toUpperCase() ni .toLowerCase().
# Ejemplo:
# "Hola" → "HOLA".
def mayus_text(t):
    res = ""

    for letter in t:
        code = ord(letter)

        # si es minúscula (a-z)
        if 97 <= code <= 122:
            res += chr(code - 32)
        else:
            res += letter

    return res


text = "Hello, my name is andres."
print(mayus_text(text))


# 12)---------------------------------------------------------------------------------------
# Obtener la suma total de las longitudes de todas las palabras
# Dado un texto, cuenta cuántas letras tiene en total, ignorando espacios.
# Ejemplo:
# "El perro corre"
# → "El" (2) + "perro" (5) + "corre" (5) = 12.
text = "El perro corre"
def count_len(t):
    res_text = len(t.replace(" ", ""))
    return res_text

print(count_len(text))


# 13)---------------------------------------------------------------------------------------
# Contar cuántos números son mayores que un valor
# Dado un arreglo de números y un número x, devuelve cuántos elementos del
# arreglo son mayores que x.
# Ejemplo:
# Lista: [2, 5, 10, 3, 8]
# x = 4
# Resultado → 3 (5, 10, 8)
lis = [2, 5, 10, 3, 8]
num = 4
def num_elderly(l, n):
    res = list()
    for i in l:
        if i > n:
            res.append(i)
    return res

print(num_elderly(lis, num))


# 14)---------------------------------------------------------------------------------------
# Encontrar el número menor
# Dado un arreglo de números, encuentra el número más pequeño sin usar funciones prehechas.
# Ejemplo:
# [7, 2, 9, 1, 5] → 1.
nums = [7, 2, 9, 8, 5]
def num_minur(ns):
    res = ns[0];
    for n in ns:
        if n < res:
            res = n
    return res

print(num_minur(nums))


# 15)---------------------------------------------------------------------------------------
# Contar palabras en una frase
# Dado un texto, devuelve cuántas palabras tiene.
# Ejemplo:
# "Java y Python son geniales" → 5.
# (Regla: palabras separadas por espacios).
text = "Java y Python son geniales"
def count_word(t):
    res = t.split()
    return len(res)

print(count_word(text))


# 16)---------------------------------------------------------------------------------------
# Verificar si todos los números son positivos
# Dado un arreglo, devuelve true si todos los números son mayores que 0
# Si hay al menos uno negativo o cero, devuelve false.
# Ejemplo:
# [1, 3, 5] → true
# [1, -2, 5] → false.
num = [1, -3, 5]
def is_positive_or_negative(ns):
    for n in ns:
        if n < 0:
            return False
    return True

print(is_positive_or_negative(num))


# 17)---------------------------------------------------------------------------------------
# Repetir una palabra n veces
# Dada una palabra y un número number, devuelve la palabra repetida n veces.
# Ejemplo:
# Palabra: "Hola"
# number = 3
# Resultado → "HolaHolaHola".
word = "Hola"
num = 3
def word_repeat(w, n):
    res = ""
    i = 0
    while i < n:
        res += w
        i += 1
    return res

print(word_repeat(word, num))