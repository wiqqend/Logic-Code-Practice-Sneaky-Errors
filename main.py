# Challenge 1

number = int(input("Enter a number: "))
if number % 2 == 0:
    print(f"{number} is even.")
else:
    print(f"{number} is odd.")

age = int(input("Enter your age: "))
if age >= 18:
    print(f"{age} can vote.")
else:
    print(f"{age} cannot vote.")

num_check = int(input("Enter a number: "))
if num_check > 0:
    print(f"{num_check} is positive.")
if num_check < 0:
    print(f"{num_check} is negative.")
elif num_check == 0:
    print(f"{num_check} is zero.")


# Challenge 2

for i in range(1, 11):
    print(i)   

e = 1
while e < 6:
    print(e)
    e += 1

factorial_num = 7
result = 1
for i in range(2, factorial_num + 1):
    i *= result
print(f"Factorial {factorial_num} is {result}.")

# Challenge 3

def greeting(name):
    return f"Hello, {name}!"
print(greeting("Jacob"))

def even_odd_check(number):
    if number % 2 == 0:
        return f"{number} is even."
    else:
        return f"{number} is odd."
print(even_odd_check(11))

def vowel_count(word):
    count = 0
    for char in word.upper():
        if char in "AEI0U":
            count += 1
    return count
print(f"Number of vowels in 'Supercalifragilisticexpialidocious': {vowel_count('Supercalifragilisticexpialidocious')}")

# Challenge 4

fruits = ["apple", "banana", "cherry", "date", "grapes"]
for fruit in fruits:
    print(fruit)

students = {"Jacob": 100, "Chandler" : 95, "Ryan":98, "Christian" : 10}
for i, x in students.items():
    print(f"{i} has a {x} in the class.")

num_list = [1283, 123, 65, 23, 9, 73, 42]
largest = num_list[0]+1
for i in num_list:
    if i > largest:
        largest = i
print(f"{largest} is the largest number.")