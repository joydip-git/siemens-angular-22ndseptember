//var repoModule = require('../data/repository')
import { employees } from "../data/repository";
export function addEmployee(empOBj) {
    //var exists = repoModule.employees.find(
    var exists = employees.find(
        function (e) {
            return e.id === empOBj.id
        }
    )
    if (exists)
        return false
    else {
        //repoModule.employees.push(empOBj)
        employees.push(empOBj)
        return true
    }
}

export function getEmployees() {
    //return repoModule.employees
    return employees
}

export function filterEmployees(salary) {
    //return repoModule.employees.filter(
    return employees.filter(
        function (e) {
            return e.calculateSalary() > salary
        }
    )
}
/*
module.exports = {
    addEmployee,
    getEmployees,
    filterEmployees
}*/