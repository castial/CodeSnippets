const param = {
    name: 'iafine',
    age: '26',
    address: 'ShenZhen'
}

const newParam = {
    name: 'Harlan'
    // age: '26',
    // address: ShenZhen
}

Object.assign(param, newParam)

console.log(param)