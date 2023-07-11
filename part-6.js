(() => {
    console.log("hi")
})()

const func = new Function("a", "b", "return a-b")
let x = func(2, 3)
console.log(x)
console.log(func1())
function func1() {
    return 1
}

const person = {
    name: "aryaman",
    greet: function (msg) {
        console.log(`hi ${this.name} how are your ${msg}?`)
    }
}
const name = {
    name: "not aryaman"
}
person.greet.call(name, "thighs")

const friends = {
    name: "John",
    greet: function (message) {
        console.log(`${message}, ${this.name}!`);
    }
};

const friend = {
    name: "Alice"
};

friends.greet.apply(friend, ["Hello", "HII"]);

const per = {
    name: "John",
    greet: function (message) {
        console.log(`${message}, ${this.name}!`);
    }
};

const f = {
    name: "alex"
};

const greetFriend = per.greet.bind(f, "Hii");
greetFriend();
