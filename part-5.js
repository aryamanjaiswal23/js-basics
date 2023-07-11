//string to json
const jsonString = '{"name":"John Doe","age":25,"email":"john.doe@example.com"}';
const person = JSON.parse(jsonString);
console.log(person);

//json to string
const person1 = { name: "John Doe", age: 25, email: "john.doe@example.com" };
const jsonStrings = JSON.stringify(person);
console.log(jsonStrings);

const per = {
    name: "aa",
    age: 10
}
var x = per
x.age = 20
console.log(per.age)

const obj = {
    name: 'John',
    age: 30,
    occupation: 'Developer',
    greet: function () {
        console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
}
console.log(obj.name)
obj.greet()
// delete obj.age
// console.log(obj)

for (let x in obj) {
    console.log(obj[x] + " ")
}

const nn = Object.values(obj)
console.log(nn)


const temp = {
    fname: "aryaman",
    lname: "jaiswal",
    email: "id",
    age: 10,
    language: "",
    set lang(l) { this.language = l },
    get fullname() {
        return this.fname + " " + this.lname
    }
}
temp.language = "en"
console.log(temp.language, temp.fullname)

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.fullName = function () {
    return this.firstName + ' ' + this.lastName;
};


var p = new Person("Aryaman", "Jaiswal")
console.log(p.fullName())

function* generateNumbers() {
    yield 1;
    yield 2;
    yield 3;
}

const generator = generateNumbers();

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

var myNum = () => {
    let n = 0
    return {
        next: function () {
            n += 10
            return { value: n, done: false }
        }
    }
}
const n = myNum()
n.next()
n.next()
