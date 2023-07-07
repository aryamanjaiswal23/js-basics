var xx = 5
console.log(xx)
const func = (x, y) => {
    return x * y
}
console.log(func(2, 3))

var z = 14 + true
console.log(z)
x = 4
y = 8
x <<= y
console.log(x)

function tempChange(temp) {
    return (5 / 9) * (temp - 32)
}
console.log("the temp in celsius is " + tempChange(108))

var temp = (k) => {
    return k - 273.15
}
console.log(temp(500))

newObject = {
    name: "new name",
    age: 23,
    address: "new address"
}

var s = "hello there how are you?"
var sub = s.substring(2, 7)
const t = s.slice(1, 4)
let n = s.replace("hello there", "salut")

var p = n.search("salut")
var ty = s.search("ere", 2)
console.log(s, sub, t, n, p, ty)
var rr = "HELLO hello hi HI"
console.log(rr.search(/el/gi))
console.log(rr.match(/hi/gi))
let fn = "Aryaman"
let ln = "jaiswal"
const namme = `Hello i can't see and my name is ${fn} ${ln}`
console.log(namme)
var e = "10"
var f = 20
console.log(e + f)

var i = 3234
console.log(i.toString(), i.toExponential(), i.toPrecision(), i.toFixed())

