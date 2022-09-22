//2. constructor function syntax
function person(nameValue, idValue, salaryValue) {
    var info
    this.name = nameValue
    this.id = idValue
    this.salary = salaryValue
    this.print = function () {
        info = this.name + ' ' + this.id + ' ' + this.salary
        return info
    }
    return this
}

var anilPersonObject = new person('anil', 1, 1000)

anilPersonObject.location = 'Bangalore'
anilPersonObject.sayHi = function () {
    console.log('Hi...')
}
console.log(anilPersonObject.name)
console.log(anilPersonObject['salary'])
console.log(anilPersonObject.location)
console.log(anilPersonObject.print())
anilPersonObject.sayHi()

for (var propName in anilPersonObject) {
    var propValue = anilPersonObject[propName]
    console.log(propName + ':' + propValue)
}

