class Hr extends Employee {
    constructor(name, id, basicPay, daPay, hraPay, gratuityPay) {
        super(name, id, basicPay, daPay, hraPay)
        this.gratuityPay = gratuityPay
    }
    calculateSalary() {
        var partialSalary = super.calculateSalary()
        return partialSalary + this.gratuityPay
    }
}