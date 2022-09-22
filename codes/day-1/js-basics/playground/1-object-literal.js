//1. object-literal syntax

var anilPersonObject = {
    //value properties
    name: 'anil',
    id: 1,
    salary: 1000,
    //functional properties
    print: function () {
        return this.name + ' ' + this.id + ' ' + this.salary
    }
}

anilPersonObject.location = 'Bangalore'
anilPersonObject.sayHi = function () {
    console.log('Hi...')
}
console.log(anilPersonObject.name)
console.log(anilPersonObject['salary'])
console.log(anilPersonObject.location)
console.log(anilPersonObject.print())
anilPersonObject.sayHi()

for (var propName in anilPersonObject) {
    var propValue = anilPersonObject[propName]
    console.log(propName + ':' + propValue)
}

