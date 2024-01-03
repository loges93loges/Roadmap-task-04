(function(arr) {
    var sum = 0
    arr.forEach(function(num) {
        sum += num
    })
    console.log("Sum:", sum)
})([10, 20, 30, 40,50])