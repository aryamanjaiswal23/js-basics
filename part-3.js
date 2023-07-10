var s = new Set()
s.add('a')
s.add('b')
s.add('c')
console.log(s)
s.add('a')
s.add('a')
s.add('a')

t = ""
s.forEach((r) => {
    t += r
})
console.log(t)
console.log(s.values())

for (const i of s.values()) {
    t += i
}
console.log(t)

var mp = new Map()
mp.set("a", 1)
mp.set("b", 2)
mp.set("c", 3)
console.log(mp)
mp.forEach((i) => {
    console.log(i)
})
console.log(mp.get("b"))
mp.delete("c")
console.log(mp.size)


console.log(typeof true)

console.log(new Date().constructor)
var isArray = (arr) => {
    // return arr.constructor.toString().indexOf("Array") > -1
    return arr.constructor === Array
}
console.log(isArray([]))

console.log(Number("hi"), Number(""), Number(Math.PI))
var date = new Date()
console.log(Number(date), date.toString())
var text = "hellO TheRe I can TyPe lIKE ThIS"
// var w = text.search(/there/i)
var w = text.search(['hO'])

console.log(w)
try {
    var a = 10 / 0
    console.log(a)
} catch (error) {
    console.log(error)
}