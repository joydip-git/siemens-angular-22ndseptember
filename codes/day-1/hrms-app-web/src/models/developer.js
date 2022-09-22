class Developer extends Employee {
    constructor(name, id, basicPay, daPay, hraPay, incentivePay) {
        super(name, id, basicPay, daPay, hraPay)
        this.incentivePay = incentivePay
    }
    calculateSalary() {
        var partialSalary = super.calculateSalary()
        return partialSalary + this.incentivePay
    }
}