//var employeeModule = require('./employee')
import { Employee } from "./employee";
//class Hr extends employeeModule.Employee {
export class Hr extends Employee {
    constructor(name:string, id:number, basicPay:number,  daPay:number, hraPay:number, public gratuityPay:number) {
        super(name, id, basicPay, daPay, hraPay)
    }
    calculateSalary() {
        var partialSalary = super.calculateSalary()
        return partialSalary + this.gratuityPay
    }
}

//module.exports = { Hr }