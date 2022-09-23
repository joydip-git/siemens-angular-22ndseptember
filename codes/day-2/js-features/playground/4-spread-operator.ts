const anilPersonObj = {
    persnonName: 'anil',
    id: 1,
    salary: 1000,
    friend: {
        name: 'sunil'
    }
}

//const testCopyObj = Object.assign({}, anilPersonObj)
/*
const copyObj = {}
for (const propName in anilPersonObj) {
    const propValue = anilPersonObj[propName]
    copyObj[propName] = propValue
}
console.log(copyObj)
//anilPersonObj['location'] = 'Bangalore'
*/

//spread operator
const copyObj = {
    ...anilPersonObj,
    friend: {
        ...anilPersonObj.friend
    }
}
anilPersonObj.friend.name = "sunil kumar"
//anilPersonObj.persnonName = "anil kumar"
//copyObj.persnonName = "anil kumar"

console.log(copyObj === anilPersonObj)
console.log(copyObj.friend === anilPersonObj.friend)

//console.log(copyObj.persnonName)
//console.log(anilPersonObj.persnonName)
console.log(copyObj.friend.name)

