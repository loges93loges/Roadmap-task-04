//   1..Print odd numbers in an array

(function(arr) {
  let result = []
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            result.push(num) 
     } 
    })
     console.log(result)
    })
([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

//   o/p:
//   [1,3,5,7,9]



//   2..Convert all the strings to title caps in a string array

(function(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].toLowerCase().replace(/\b\w/g, function(char) {
            return char.toUpperCase()
        })
    }
    console.log(arr)
})(["pine", "banana", "mango", "grape"])

//   o/p:
//   [ 'Pine', 'Banana', 'Mango', 'Grape']


//   3..Sum of all numbers in an array

(function(arr) {
    var sum = 0
    arr.forEach(function(num) {
        sum += num
    })
    console.log("Sum:", sum)
})([10, 20, 30, 40,50])

//   o/p:
//   Sum: 150


//   4..Return all the prime numbers in an array

function prime(counter, val){
for ( counter; counter <= val; counter++) {
 
    var notPrime = false
    for (var i = 2; i <= counter; i++) {
        if (counter%i===0 && i!==counter) {
            notPrime = true
        }
    }
    if (notPrime === false) {
                console.log(counter)
    }
}
}
prime(2, 100)
 
//   Output:
//   2,3,5,7,9,...prime


//   5..Return all the palindromes in an array
  (function(arr) {
    function isPalindrome(str) {
        var cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
        return cleanedStr === cleanedStr.split('').reverse().join('')
    }
    var palindromeArray = arr.filter(function(item) {
        return isPalindrome(item)
    })
    console.log("Palindromes:", palindromeArray)
})( ["MADAM","SIR","CIVIC" , "222" , "LEVEL" , "LOGES" , "354" , "GUVI" , "454" , "CODE"])

//   Output:
//   Palindromes: [ 'MADAM', 'CIVIC', '222', 'LEVEL', '454' ]


//   6..Return median of two sorted arrays of the same size

(function(arr1, arr2) {
    var combinedArray = arr1.concat(arr2)
    combinedArray.sort(function(a, b) {
        return a - 
    })
    var length = combinedArray.length
    var medianIndex = Math.floor(length / 2)
    var median = (combinedArray[medianIndex - 1] + combinedArray[medianIndex]) / 2
    console.log("Median:", median)
})([1, 3, 5, 7], [2, 4, 6, 8])

//   o/p:
//   Median: 4.5


//   7..Remove duplicates from an array

(function(arr) {
    var uniqueArray = arr.filter(function(item, index, array) {
        return array.indexOf(item) === index
    });

    console.log(uniqueArray)
})([1, 2, 2, 3, 4, 4, 5, 8, 6, 4])

//   o/p:
//   [ 1, 2, 3, 4, 5, 8, 6 ]


//   8..Rotate an array by k times

(function(arr, k) {
    var len = arr.length
    var rotations = k % len
    var rotatedArray = arr.slice(rotations).concat(arr.slice(0, rotations))
    console.log(rotatedArray)
})([1, 2, 3, 4, 5], 2)

//   o/p:
//   [ 3, 4, 5, 1, 2 ]
