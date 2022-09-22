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
Object.prototype.sayHi = function () {
    console.log('say hi to ' + this.name)
}
console.log(person.prototype)
//console.log(person.prototype.__proto__)
var anilPersonObject = new person('anil', 1, 1000)
console.log(anilPersonObject)
anilPersonObject.sayHi()