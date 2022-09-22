function addEmployee(empOBj) {
    var exists = employees.find(
        function (e) {
            return e.id === empOBj.id
        }
    )
    if (exists)
        return false
    else {
        employees.push(empOBj)
        return true
    }
}

function getEmployees() {
    return employees
}

function filterEmployees(salary) {
    return employees.filter(
        function (e) {
            return e.calculateSalary() > salary
        }
    )
}