export class Employee {
    constructor(name, id, basicPay, daPay, hraPay) {
        this.name = name
        this.id = id
        this.basicPay = basicPay
        this.daPay = daPay
        this.hraPay = hraPay
    }
    calculateSalary() {
        return this.basicPay + this.daPay + this.hraPay
    }
}

// module.exports = {
//     Employee
// }