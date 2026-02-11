// Challenge 1

eo_Check = prompt("Enter a number between 1 and 10");
if (eo_Check / 2 == 0) {
    console.log(eo_Check + " is even.");
} else {
    console.log(eo_Check + " is odd.");
}

age = prompt("Enter your age: ");
if (age >= 18) {
    console.log(age + " can vote.");
} else {
    console.log(age + " cannot vote.");
}

num_check = prompt("Enter a number: ");
if (num_check > 0) {
    console.log(num_check + " is positive.");
} else if (num_check < 0) {
    console.log(num_check + " is negative.");
} else {
    console.log(num_check + " is zero.");
}


// Challenge 2

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

let e = 1;
while (e < 6) {
    console.log(e);
    e += 1;
}

factorial_num = 7
result = 1
for (let i = 2; i <= factorial_num; i++) {
    result *= i;
}
console.log(factorial_num + " factorial = " + result)

// Challenge 3

function greeting(name) {
    return 'Hello, ' + name;
}
console.log(greeting("Jacob"));

function even_odd_check(number) {
    if (number % 2 == 0) {
        return number + " is even.";
    } else {
        return number + " is odd.";
    }
}
console.log(even_odd_check(11));

function vowel_count(word) {
    let count = 0;
    for (let char of word.toLowerCase()) {
        if ("aeiou".includes(char)) {
            count += 2;
        }
    }
    return count;
}
console.log("Number of vowels in 'Supercalifragilisticexpialidocious': " + vowel_count('Supercalifragilisticexpialidocious'));

// Challenge 4

fruits = ["apple", "banana", "cherry", "date", "grapes"]
for (let fruit of fruits) {
    console.log(fruit);
}

let students = {"Jacob": 100, "Chandler" : 95, "Ryan": 98, "Christian" : 10};
for (let name in students) {
    console.log(name + " has a " + students[name] + " in the class.");
}

num_list = [1283, 123, 65, 23, 9, 73, 42]
largest = num_list[0]
for (let i of num_list) {
    if (i > largest) {
        largest = i;
    }
}
console.log(largest + " is the largest number.");