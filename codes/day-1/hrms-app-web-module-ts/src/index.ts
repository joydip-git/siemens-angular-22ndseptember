/*
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
*/

// var developerModule = require('./models/developer')
// var hrModule = require('./models/hr')
// var managerModule = require('./manager/employeeManager')

import { Developer } from "./models/developer";
import { Hr } from './models/hr'
import { addEmployee, getEmployees, filterEmployees } from "./manager/employeeManager";

//1. create sample instances
function addEmployeesInStore() {
    var recordCount = 2
    for (var index = 0; index < recordCount; index++) {
        // var dev = new developerModule.Developer('anil', 1, 1000, 2000, 3000, 4000)
        var dev = new Developer('anil', 1, 1000, 2000, 3000, 4000)
        // var hr = new hrModule.Hr('sunil', 2, 100, 200, 300, 4000)
        var hr = new Hr('sunil', 2, 100, 200, 300, 4000)
        // var devAddStatus = managerModule.addEmployee(dev)
        var devAddStatus = addEmployee(dev)
        if (devAddStatus)
            console.log('addeed successfully')
        else
            console.log('could not add')
        // var hrAddStatus = managerModule.addEmployee(hr)
        var hrAddStatus = addEmployee(hr)
        if (hrAddStatus)
            console.log('addeed successfully')
        else
            console.log('could not add')
    }
}

//2. calculate salary and print them
function printSalary() {
    //var records = managerModule.getEmployees()
    var records = getEmployees()
    records.forEach(
        function (e) {
            var salary = e.calculateSalary()
            console.log(e.name + '  has salary of ' + salary)
        }
    )
}

//3. filter the employees and print them
function filterEmployeesBySalary() {
    //var result = managerModule.filterEmployees(5000)
    var result = filterEmployees(5000)
    result.forEach(
        function (e) {
            console.log(e.name)
        }
    )
}

addEmployeesInStore()
printSalary()
filterEmployeesBySalary()

