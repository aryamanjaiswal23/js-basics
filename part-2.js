const d = new Date("October 13, 2014 11:13:00");
console.log(d)
const dat = new Date(2018, 11, 24, 10, 33, 30, 0); // (year,month,day,hour,minute,seconds,millisecond)
console.log(dat)


var num = 5
if (num < 0) {
    console.log("negetive number")
} else if (num == 0) console.log("number is zero"); else console.log("positive number")


switch (new Date().getDay()) {
    default:
        day = "yay weekend"
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}
console.log(day)


for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i + ' is even');
    } else {
        console.log(i + ' is odd');
    }
}

let person = {
    name: 'John',
    age: 30,
    profession: 'Developer'
};

for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log(key + ': ' + person[key]);
    }
}

let message = 'Hello';

for (let char of message) {
    console.log(char);
}

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i = 0;
let text = "";

while (cars[i]) {
    text += cars[i];
    i++;
}
console.log(text)

for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break;
    }
    console.log(i);
}

for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue;
    }
    console.log(i);
}