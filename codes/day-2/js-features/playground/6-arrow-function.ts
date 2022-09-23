//1.
// function outer() {

//     this.a = 10
//     console.log(this)
//     const ref = this
//     function inner() {
//         this.b = 20
//         console.log(this)
//         //const res = this.a + this.b
//         const res = ref.a + this.b
//         console.log(res)
//     }

//     inner()
// }

//2.
// function outer() {

//     this.a = 10
//     console.log(this)

//     let inner = function () {
//         this.b = 20
//         console.log(this)
//         const res = this.a + this.b
//         console.log(res)
//     }

//     inner = inner.bind(this)
//     inner()
// }

function outer() {

    this.a = 10
    console.log(this)

    let inner = () => {
        this.b = 20
        console.log(this)
        const res = this.a + this.b
        console.log(res)
    }
    inner()
}
outer()



function add(a: number, b: number): number {
    return a + b
}

const subtract = function (a: number, b: number): number {
    return a - b
}

//arrow function
const multiply = (a: number, b: number): number => {
    return a * b
}

const divide = (a: number, b: number): number => a / b

const printValue = (a: number): void => console.log(a)