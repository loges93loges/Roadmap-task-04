//   A.	Do the below programs in arrow functions.

//   1..rint odd numbers in an array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const printOddNumbers = arr => {
      let result = []
    arr.forEach(num => {
        if (num % 2 !== 0) {
            result.push(num) 
        }
    })
   console.log(result)
}
printOddNumbers(array)

//   Output:
//   [ 1, 3, 5, 7, 9 ]


//   2..Convert all the strings to title caps in a string array

const stringArray = [ 'pine', 'banana', 'mango', 'grape']
const convertToTitleCase = arr => {
    return arr.map(str => str.toLowerCase().replace(/\b\w/g, char => char.toUpperCase()))
}
const titleCaseArray = convertToTitleCase(stringArray)
console.log(titleCaseArray)

//   o/p:
//   [ 'Pine', 'Banana', 'Mango', 'Grape' ]


//   3..Sum of all numbers in an array

const array = [10, 20, 30, 40, 50]
const sumOfNumbers = arr => {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
};
const result = sumOfNumbers(array)
console.log("Sum:", result)

//   o/p:
//   sum: 150


//   4.. return all the prime numbers in an array

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const isPrime = num => {
    if (num <= 1) return false
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
};
const primeNumbers = arr => arr.filter(num => isPrime(num))
console.log("Prime Numbers:", primeNumbers(array))

//   o/p:
//   Prime Numbers: [ 2, 3, 5, 7 ]


//   5..Return all the palindromes in an array

const array = ["MADAM","SIR","CIVIC" , "222" , "LEVEL" , "LOGES" , "354" , "GUVI" , "454" , "CODE"]
const isPalindrome = str => {
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
    return cleanedStr === cleanedStr.split('').reverse().join('')
}
const palindromeArray = arr => arr.filter(item => isPalindrome(item))
console.log("Palindromes:", palindromeArray(array))

//   Output:
//   Palindromes: [ 'MADAM', 'CIVIC', '222', 'LEVEL', '454' ]
