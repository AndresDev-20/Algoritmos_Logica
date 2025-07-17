# Primer ejercicio
# Crea una funcion que encuentre los indices de los dos numero que sumen un numero concreto
def two_sum(nums, target):
    for i in range(len(nums)):
        for j in range(i + 1, len(nums)):
            if nums[i] + nums[j] == target:
                return (i, j)
    return None

print(two_sum([2, 7, 11, 15], 9))  # (0, 1)
print(two_sum([2, 7, 11, 15], 90))  # None



# Segundo ejercicio
# Crea una funcion que verifique si un numero es palindromo con true o false
def is_palindrome(num):
    s = str(num)
    return s == s[::-1]

print(is_palindrome(121))  # True
print(is_palindrome(123))  # False

# Tercer ejercicio
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

# You can call the 'name' function to run fizz_buzz:
# name()