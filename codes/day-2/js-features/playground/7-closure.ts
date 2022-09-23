var m = 100
function outer() {
    var a = 10
    let inner = () => {
        var b = 20
        const res = a + b
        console.log(res)


        let inner2 = function () {
            //[m,a,b]
        }
        inner2()
    }
    return inner
}
var innerFnRef = outer()
innerFnRef()
