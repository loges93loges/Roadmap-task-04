//   1. print odd numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.forEach(function (number) {
    if (number % 2 !== 0) {
        console.log(number);
    }
});

//   o/p:
//   1,3,5,7,9


//   2. convert all string to title caps in an array string

let strings = ["apple", "orange", "pine", "mango"];
let titleCaseStrings = strings.map(function (str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
});
console.log(titleCaseStrings);

//   o/p:
//   [ 'Apple', 'Orange', 'Pine', 'Mango' ]


//   3. sum of all numbers in an array

let numbers = [10, 20, 30, 40, 50];
let sum = numbers.reduce(function (a, b) {
    return a + b;
}, 0);
console.log("Sum of the numbers:", sum);

//   o/p:
//   sum : 150


//   4. return all the prime numbers in an array

let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let isPrime = function (num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
};
let primeNumbers = numbers.filter(isPrime);
console.log(primeNumbers);

//   o/p:
//   [2,3,5,7,11,13,17,19]


//   5. return all the palindromes in an array

let words = ["MADAM","SIR","CIVIC" , "222" , "LEVEL" , "LOGES" , "354" , "GUVI" , "454" , "CODE"];
let isPalindrome = function (word) {
    let reversedWord = word.split("").reverse().join("");
    return word === reversedWord;
};
let palindromes = words.filter(isPalindrome);
console.log(palindromes);

//   o/p:
//   [ 'MADAM', 'CIVIC', '222', 'LEVEL', '454' ]


//   6. return median of two sorted arrays of the same size

let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];
let findMedian = function (arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    mergedArray.sort((a, b) => a - b);
    let length = mergedArray.length;
    let middleIndex = Math.floor(length / 2);
    if (length % 2 === 0) {
        return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    } else {
        return mergedArray[middleIndex];
    }
};
let median = findMedian(array1, array2);
console.log("Median:", median);

//   o/p:
//   Mediam:4.5


//   7. remove duplicates from an array

let arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 1, 6, 5, 4, 8, 7, 5, 9, 8];
let uniqueArray = function (arr) {
    return arr.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
};
let arrayWithoutDuplicates = uniqueArray(arrayWithDuplicates);
console.log("Array without duplicates:", arrayWithoutDuplicates);

//   o/p:
//   [1, 2, 3, 4, 5, 6, 8, 7, 9]


//   8. rotate an array by k times

let originalArray = [1, 2, 3, 4, 5];
let k = 2;
let rotateArray = function (arr, rotations) {
    rotations = rotations % arr.length; 
    let rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations));
    return rotatedArray;
};
let rotatedResult = rotateArray(originalArray, k);
console.log(rotatedResult);

//   o/p:
//   [ 3, 4, 5, 1, 2 ]


 

