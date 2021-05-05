//* 127.1

function getDiff(...arrs) {
    let result = [];
    let arr0 = arrs.shift();

    for (let el of arrs) {
        result.push(getFirstDiff(arr0, el));
    }

    return result.filter(function (el, i, arr) {
        return arr.indexOf(el, i + 1) == -1;
    });
}

function getFirstDiff(arr1, arr2) {
    let result = [];
    for (let elem of arr1) {
        if (inArray(elem, arr2)) {
            result.push(elem);
        }
    }
    for (let elem of arr2) {
        if (inArray(elem, arr1)) {
            result.push(elem);
        }
    }

    return result;
}

function inArray(elem, arr) {
    return arr.indexOf(elem) == -1;
}
console.log(getDiff([1, 2, 3, 4], [12, 3, 32, 2,], [1312312, 231, 3, 2, 1, 3123]))

//* 128.1

let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name, surname, department, position, salary] = arr;
console.log(salary)

//* 128.2

function func() {
    return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}

let [name, surname, department, position, salary] = func();
console.log(surname)

//* 128.3
let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
let [, , department, position,] = arr;
console.log(department, position)

//* 128.4
let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [name, surname, ...info] = arr;
console.log(name, surname, info)

//* 128.5
let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];
let [name, surname, department, position = 'джуниор'] = arr;
console.log(position)

let arr = ['Иван', 'Иванов', 'отдел разработки'];
let [name, surname, department, position = 'джуниор'] = arr;
console.log(position)

//* 128.6

function func() {
    return (new Date).getDate();
}
function func1() {
    return (new Date).getMonth() + 1;
}
function func2() {
    return (new Date).getFullYear();
}
let arr = [];
let [year = func2(), month = func1(), day = func()] = arr;
console.log(year, month, day)

//* 129.1
let options = {
    color: 'red',
    width: 400,
    height: 500,
};

const { color, width, height } = options;
console.log(color, width, height)

//* 129.2

let options = {
    color: 'red',
    width: 400,
    height: 500,
};
const { color: c, width: w, height: h } = options;

console.log(c, w, h)

//* 129.3

let options = {
    width: 400,
    height: 500,
};
const { color = 'black', width, height } = options;
console.log(color, width, height)

//* 129.4
let options = {
    width: 400,
    height: 500,
};
let { color: c = 'black', width: w, height: h } = options;
console.log(c, w, h)

//* 130.1

function func([name, surname, department, position, salary]) {
    return console.log(name, surname, department, position, salary)
}

func(['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]);

//* 130.2

function func([name, surname, ...info]) {
    return console.log(name, surname, info)
}

func(['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]);

//* 130.3

function func([name, surname, department, position = 'джуниор']) {
    return console.log(name, surname, department, position)
}

func(['Иван', 'Иванов', 'отдел разработки']);

//* 130.4

function func(department, [name, surname], hired) {

    const [year, month, day] = hired.split('-')
    return console.log(name, surname, department, year, month, day)
}

func('отдел разработки', ['Иван', 'Иванов'], '2018-12-31');

// *130.5
function func({ color, width, height }) {
    return console.log(color, width, height)
}

func({ color: 'red', width: 400, height: 500 });

//* 130.6

function func({ color = 'black', width, height }) {
    return console.log(color, width, height)
}

func({ color: 'red', width: 400, height: 500 });
func({ width: 400, height: 500 });

//* 131.1

console.log(new Date().getDate());

//* 131.2

console.log(new Date().getMonth() + 1);

//* 131.3

console.log(new Date().getFullYear());

//* 132.1 

let date = new Date();
function addZero(num) {
    if (num >= 0 && num <= 9) {
        return '0' + num;
    } else {
        return num;
    }
}
console.log(addZero(date.getHours()) + ':' + addZero(date.getMinutes()) + ':' + addZero(date.getSeconds()) + ' ' + (date.getFullYear()) + '.' + addZero(date.getMonth() + 1) + '.' + addZero(date.getDate()));

//* 132.2

const date = '2020-01-12';
const result = date.split('-').reverse().join('.');
console.log(result)

//* 133.1

console.log(new Date().getDay());

//* 133.2

let date = new Date().getDay();
date = (date === 0 || date === 6) ? console.log('Weekend') : console.log('goToWork');

//* 133.3

let date = 7 - new Date().getDay();
date = date === 7 ? console.log('Today Sunday') : console.log(`left until the weekend ${date}`)

//*134.1

let months = [
    'янв', 'фев', 'мар', 'апр', 'май', 'июн',
    'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
];

const month = new Date().getMonth();
console.log(months[month]);

//* 135.1

const birthDate = console.log(new Date(1997, 6, 25).getDay());

//* 136.1

const getTime = console.log(new Date(2025, 0, 1).getTime())

//* 136.2

let time = new Date(2000, 0, 10).getTime() - new Date(1998, 2, 1).getTime()
time = (time / (1000 * 60 * 60 * 24));
console.log(time)

//*136.3
let time = new Date().getTime() - new Date(1997, 6, 25).getTime()
time = time / (1000 * 60 * 60 * 24 * 30);

console.log(time)

//* 137.1
const time = new Date(2010, 1, 15) - new Date(2000, 9, 1)
console.log(time)

//* 137.2
let time = new Date(2010, 1, 15) - new Date(2000, 9, 1)
const day = time / (1000 * 60 * 60 * 24)
console.log(day)

//* 137.3
const time = new Date(2010, 1, 15) - new Date(2000, 9, 1)
const month = time / (1000 * 60 * 60 * 24 * 30)
console.log(month)

//* 137.4

let time = new Date(2010, 1, 15) - new Date(2000, 9, 1)
const year = time / (1000 * 60 * 60 * 24 * 30 * 12)
console.log(year)

//* 138.1 // отвечаю при условии что в месяце 30 дней
//* 2018 2 7

//* 138.2
//* 2018 3 1

//* 138.3
//* 2018 4 1

//* 138.4
//* 2018 2 3

//* 138.5
//* 2019 1 2

//* 138.6
//* 2020 9 2

//* 138.7
//* 2018 4 31

//* 138.8
//* 2017 11 31

//* 138.9
//* 2017 10 28

//* 138.10
//* 2018 0 1

//* 138.11
//* 2018 0 2

//* 138.12
//* 2018 0 5

//* 139.1

function getLastDay(month, year) { // функция должна принимать и год
    let lastDays = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    if (month != 1) {
        return lastDays[month]; // если не февраль
    } else if (year % 4 === 0 && year % 100 !== 0) {
        return 29;
    } else { return lastDays[month] };
};
console.log(getLastDay(1, 2020))

//* 139.2

const getD = (year, monts) => new Date(year, monts, 0).getDate();
console.log(getD(2020, 3))

//* 139.3

console.log(new Date(2025, 5, 0).getDay())

//* 139.4

const isLeap = (year) => new Date(year, 2, 0).getDate() === 29;
console.log(isLeap(2018))

