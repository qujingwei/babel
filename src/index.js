const obj1 = {a:1}
const obj2 = {b:1}

console.log(Object.assign(obj1, obj2))

[1].forEach(item => {
    console.log(item)
})

let fn = function * gen(){
    yield 1
    yield 2
    yield 3
}
fn().next()