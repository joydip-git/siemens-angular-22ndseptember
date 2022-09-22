var numbers = [1, 4, 2, 5, 3, 7, 0, 8, 6, 9]
var evenLogic = function (num) {
    return num % 2 === 0 ? true : false
}

var res = numbers.filter(evenLogic)
res.sort(
    function (a, b) {
        return a - b
    }
)
res.forEach(
    function (num) {
        console.log(num)
    }
)

