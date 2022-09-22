function printChoice() {
    alert('1. developer 2. hr')
}
function acceptChoice() {
    var choice = Number(prompt('enter choice[1/2]: ', 0))
    return choice
}
function createEmployee(choice) {
    var name = prompt('name: ', '')
    var id = Number(prompt('id: ', 0))
    var basicPay = Number(prompt('basic payment: ', 0))
    var daPay = Number(prompt('da payment: ', 0))
    var hraPay = Number(prompt('hra payment: ', 0))

    var employee
    switch (choice) {
        case 1:
            var incetivePay = Number(prompt('incentive payment: ', 0))
            employee = new Developer(name, id, basicPay, daPay, hraPay, incetivePay)
            break;

        case 2:
            var gratuityPay = Number(prompt('gratuity payment: ', 0))
            employee = new Hr(name, id, basicPay, daPay, hraPay, gratuityPay)
            break;

        default:
            employee = undefined
            break;
    }
    return employee
}
//1. create sample instances
function addEmployeesInStore() {
    var recordCount = Number(prompt('How many records?', 0))
    for (var index = 0; index < recordCount; index++) {
        printChoice()
        var choice = acceptChoice()
        var employee = createEmployee(choice)
        if (employee) {
            var addStatus = addEmployee(employee)
            if (addStatus)
                alert('addeed successfully')
            else
                alert('could not add')
        }
    }
}

//2. calculate salary and print them
function printSalary() {
    var records = getEmployees()
    records.forEach(
        function (e) {
            var salary = e.calculateSalary()
            alert(e.name + '  has salary of ' + salary)
        }
    )
}

//3. filter the employees and print them
function filterEmployeesBySalary() {
    var result = filterEmployees(5000)
    result.forEach(
        function (e) {
            alert(e.name)
        }
    )
}

addEmployeesInStore()
printSalary()
filterEmployeesBySalary()

