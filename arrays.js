var arr = ["organe", "green", "purple", "pink"]
console.log(arr.toString())
console.log(arr.join(" "))
var temp = arr.pop()
console.log(temp)
arr.push("red")
console.log(arr)
arr.shift()
console.log(arr)

const fruits = ["Banana", "Orange", "Apple", "Mango"];
//splice adds new elements to an array, slice creates a new array
var t = fruits.slice(2, 4)
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits, t)
const neww = arr.concat(fruits)
console.log(neww)
const citrus = fruits.slice(3);
console.log(citrus)
var _2d = [[1, 2], [23, 4, 2], [5, 4, 3]]
var nw = _2d.flat()
console.log(nw)
neww.sort()
console.log(neww)
neww.reverse()
console.log(neww)


var set = [1, 2, 4, 5, 2, 4, 6, 7]
set.forEach((ele) => console.log(ele))

var a = set.map((ele) => { return ele * 2 })
console.log(a)
