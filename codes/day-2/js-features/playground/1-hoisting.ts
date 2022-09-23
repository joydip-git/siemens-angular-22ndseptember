//function main(){
console.log(x) //undefined
var x
x = 10
console.log(x) //10
for (var i = 0; i < 1; i++) {
    var x
    x = 20
    console.log(x) //20
}
console.log(x) //10

call()
function call() {
    console.log('call')
}
call()

test()
var test
test = function () {
    console.log('test')
}
test()
//}
//main()