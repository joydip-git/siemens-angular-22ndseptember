//function declaration
function add(a, b, c = 0) {
    return a + b + c
}

//function expression
var subtract = function (a, b) {
    return (a - b)
}

var res = add(10, 20)
console.log(res)

var subRes = subtract(12, 3)
console.log(subRes)

//var numbers = [1, 2, 3, 4]
var numbers = new Array(1, 2, 3, 4)

numbers.push(10, 20, 30)
//delete numbers[0]


numbers.splice(1, 2, 100, 200)
console.log(numbers)