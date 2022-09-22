// function person(nameValue, idValue, salaryValue) {
//     this.name = nameValue
//     this.id = idValue
//     this.salary = salaryValue
// }
// person.prototype.print = function () {
//     return this.name + ' ' + this.id + ' ' + this.salary
// }

class Person {
    constructor(nameValue, idValue, salaryValue) {
        this.name = nameValue
        this.id = idValue
        this.salary = salaryValue
    }
    print() {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

class Trainer extends Person {
    constructor(nameValue, idValue, salaryValue, subjectValue) {
        super(nameValue, idValue, salaryValue)
        this.subject = subjectValue
    }
    print() {
        var partial = super.print()
        return partial + ' ' + this.subject
    }
}
console.log(Person.prototype)
var anilperson = new Trainer('anil', 1, 1000, 'JS')
var sunilperson = new Trainer('sunil', 2, 2000, 'Java')
console.log(anilperson.print())
console.log(sunilperson.print())