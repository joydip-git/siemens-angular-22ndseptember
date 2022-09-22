function filterValues(arr, logicFn) {
    //return another array with only even numbers
    var output = []
    for (var index = 0; index < arr.length; index++) {
        if (logicFn(arr[index])) {
            output.push(arr[index])
        }
    }
    return output
}
var numbers = [1, 4, 2, 5, 3, 7, 0, 8, 6, 9]
var evenLogic = function (num) {
    return num % 2 === 0 ? true : false
}
var oddLogic = function (num) {
    return num % 2 !== 0 ? true : false
}
// var result = filterValues(numbers, evenLogic)
var result = filterValues(numbers, oddLogic)
for (var i = 0; i < result.length; i++) {
    console.log(result[i])
}