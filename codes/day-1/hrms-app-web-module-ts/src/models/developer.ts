//var employeeModule = require('./employee')
import { Employee } from "./employee";
//class Developer extends employeeModule.Employee {
export class Developer extends Employee {

    constructor(name: string, id: number, basicPay: number, daPay: number, hraPay: number, public incentivePay: number) {
        super(name, id, basicPay, daPay, hraPay)
    }
    calculateSalary() {
        var partialSalary = super.calculateSalary()
        return partialSalary + this.incentivePay
    }
}
//module.exports = { Developer }
