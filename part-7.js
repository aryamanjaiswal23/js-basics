const myNumbers = [4, 1, -20, -7, 5, 9, -6];

const pos = removeNegetive(myNumbers, (x) => x >= 0)

function removeNegetive(temp, func) {
    const arr = []
    for (const i of temp) {
        if (func(i)) arr.push(i)
    }
    return arr
}

console.log(pos)

const f = true

var check = (time, work) => {
    return new Promise((res, rej) => {
        if (f)
            setTimeout(() => {
                res(work())
            }, time)

        else rej(console.log("no work"))
    })
}
check(5000, () => console.log("work initialized"))
    .then(() => { return check(200, () => console.log('work started')) })
    .then(() => { return check(5000, () => console.log('work in progress')) })
    .catch(() => console.log('work done!'))
    .finally(() => console.log(`day's work done`))



function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = true;
            if (success) {
                resolve("Data fetched successfully");
            } else {
                reject(new Error("Error fetching data"));
            }
        }, 2000);
    });
}

async function getData() {
    try {
        const result = await fetchData();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

getData();
