//   1. print odd numbers in an array

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
(function () {
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 !== 0) {
            console.log(numbers[i]);
        }
    }
})();

//   o/p:
//   1,3,5,7,9


//   2. convert all the string to title caps in a string array

let strings = ["apple", "orange", "pine", "mango"];
(function () {
    for (let i = 0; i < strings.length; i++) {
        strings[i] = strings[i].charAt(0).toUpperCase() + strings[i].slice(1);
    }
})();
console.log(strings);

//   o/p:
//   [ 'Apple', 'Orange', 'Pine', 'Mango' ]


//   3. sum of all numbers in an array

let numbers = [10, 20, 30, 40, 50];
let sum = (function () {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
})();
console.log("sum:",sum);

//   o/p:
//   sum: 150


//   4. return all the prime numbers in an array
let numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let primeNumbers = (function (arr) {
    let isPrime = function (num) {
        if (num < 2) return false;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    return arr.filter(isPrime);
})(numbers);
console.log(primeNumbers);

//   o/p:
//   [2,  3,  5,  7, 11, 13, 17, 19]


//   5. return all the palindromes in an array

let words = ["MADAM","SIR","CIVIC" , "222" , "LEVEL" , "LOGES" , "354" , "GUVI" , "454" , "CODE"];
let palindromes = (function (arr) {
    let isPalindrome = function (word) {
        let reversedWord = word.split("").reverse().join("");
        return word === reversedWord;
    };
    return arr.filter(isPalindrome);
})(words);
console.log(palindromes);

//   o/p:
//   [ 'MADAM', 'CIVIC', '222', 'LEVEL', '454' ]


//   6. return median of two sorted arrays of the same size

let array1 = [1, 3, 5, 7];
let array2 = [2, 4, 6, 8];
let median = (function (arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    mergedArray.sort((a, b) => a - b);
    let length = mergedArray.length;
    let middleIndex = Math.floor(length / 2);
    if (length % 2 === 0) {
        return (mergedArray[middleIndex - 1] + mergedArray[middleIndex]) / 2;
    } else {
        return mergedArray[middleIndex];
    }
})(array1, array2);
console.log("Median:", median);

//   o/p:
//   Median: 4.5


//   7. remove duplicates from an array

let arrayWithDuplicates = [1, 2, 3, 2, 4, 5, 1, 6, 5, 4, 8, 7, 5, 9, 8];
let uniqueArray = (function (arr) {
    return arr.filter(function (value, index, self) {
        return self.indexOf(value) === index;
    });
})(arrayWithDuplicates);
console.log(uniqueArray);

//   o/p:
//   1, 2, 3, 4, 5, 6, 8, 7, 9


//   8. rotate an array by k times

let originalArray = [1, 2, 3, 4, 5];
let k = 2;
let rotatedArray = (function (arr, rotations) {
    rotations = rotations % arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
})(originalArray, k);
console.log(rotatedArray);

//   o/p:
//   [ 3, 4, 5, 1, 2 ]
