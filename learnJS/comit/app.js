//* 88
let arr1 = [1, 2, 3];
let arr2 = [2, 3, 4, 5];
function inArray(el, arr) {
    return arr.indexOf(el) !== -1;
};
function getDifference(arr1, arr2) {
    let res = [];
    for (let el of arr1) {
        if (!inArray(el, arr2)) {
            res.push(el);
        }
    }
    return res;
}
function getDiff(arr1, arr2) {
    let result = [];
    result = result.concat(getDifference(arr1, arr2));
    result = result.concat(getDifference(arr2, arr1));
    return result;
}
console.log(getDiff(arr1, arr2));
//*89.1

function getDivisors(num) {
    let result = [];
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            result.push(i);
        }
    }
    return result;
}
function inArray(el, arr) {
    return arr.indexOf(el) !== -1;
};
function get(arr1, arr2) {
    let res = [];
    for (let el of arr1) {
        if (inArray(el, arr2)) {
            res.push(el);
        }
    }
    return res;
}
function getGreatestCommonDivisor(num1, num2) {
    let res = get(getDivisors(num1), getDivisors(num2));
    let k = 0;
    for (let i = 0; i < res.length; i++) {
        k = i;
    }
    return res[k];
}

console.log(getGreatestCommonDivisor(200, 220))
//*89.2

function isSimple(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return true;
        }
    }
    return false;
};
function mutuallySimple(num1, num2) {
    return isSimple(num1) === false && isSimple(num2) === false;
}
console.log(mutuallySimple(7, 7))

//*90.1

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomArr(arr) {
    return arr[getRandomInt(0, arr.length - 1)];
}
console.log(randomArr([1, 2, 3, 4, 5]))

//*90.2

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomArr(arr) {
    let sum = 0;
    for (let i = 0; i < 3; i++) {
        sum += arr[getRandomInt(0, arr.length - 1)];
    }

    return sum;
}
console.log(randomArr([1, 2, 3, 4, 5]))

//*91.1

function shuffle(arr) {
    let res = [];
    while (arr.length > 0) {
        let random = getRandomInt(0, arr.length - 1);
        let elem = arr.splice(random, 1)[0];
        res.push(elem);
    }
    return res;
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(shuffle([4, 4, 3, 2, 1]))

//*91.2

function range(min, max) {
    let res = [];
    for (let i = min; i <= max; i++) {
        res.push(i);
    }
    return res;
};
console.log(range(12, 255))

//* 91.3
function range(min, max) {
    let res = [];
    for (let i = min; i <= max; i++) {
        res.push(i);
    }
    return res;
};
function shuffle(arr) {
    let res = [];
    while (arr.length > 0) {
        let random = getRandomInt(0, arr.length - 1);
        let elem = arr.splice(random, 1)[0];
        res.push(elem);
    }
    return res;
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function rangeRand(min, max) {
    return (shuffle(range(min, max)))
}
console.log(rangeRand(12, 18));

//*92.1
function shuffle(arr) {
    let res = [];
    while (arr.length > 0) {
        let random = getRandomInt(0, arr.length - 1);
        let elem = arr.splice(random, 1)[0];
        res.push(elem);
    }
    return res;
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
function randoms(arr, length) {
    return shuffle(arr).slice(0, length);
}
console.log((randoms([1, 2, 3, 4, 4, 5], 4)));

//*93.1

function getLuckyTickets() {
    let res = [];
    for (let i = 1001; i < 10000; i++) {
        if (isLuky(i)) {
            res.push(i);
        }
    }
    return res;
}
function isLucky(num) {
    let str = isSix(num);
    let sum1 = Number(str[0]) + Number(str[1]) + Number(str[2]);
    let sum2 = Number(str[3]) + Number(str[4]) + Number(str[5]);
    return sum1 === sum2;

}
function isSix(num) {
    let str = String(num);
    if (str.length == 4) {
        str = '00' + str;
    } else if (str.length == 5) {
        str == '0' + str;
    }
    return str;
};
console.log(getLuckyTickets())

//*94.1
function isLucky(num) {
    let str = String(num);
    let col = str.length / 2;
    let sum1 = 0
    let sum2 = 0
    for (let i = 0, k = col; i < col; i++, k++) {
        sum1 += Number(str[i]);
        sum2 += Number(str[k]);
    }
    return sum1 === sum2;

};
console.log(isLucky(1010))

//*94.2
// return formStr('0',//* элемент который нужно добавить
//  digitsAmount - str.length //* находим сколько нужно добавить
//  ) + str; //* к созаднной фунцией стракой прибовляем исходную

//* 94.3

function formStr(data, length) {
    let res = '';
    for (let i = 0; i < length; i++) {
        res += data;
    }
    return res;
}
console.log(formStr('o', 4))

//*94.4

function normalizeNum(num, digitsAmount) {
    let str = String(num);
    return formStr('0', digitsAmount - str.length) + str;
}

function formStr(data, length) {
    let res = '';
    for (let i = 0; i < length; i++) {
        res += data;
    }
    return res;
}
console.log(normalizeNum(33, 2))

//*94.5
function isLucky(num) {
    let str = String(num);
    let col = str.length / 2;
    let sum1 = 0
    let sum2 = 0
    for (let i = 0, k = col; i < col; i++, k++) {
        sum1 += Number(str[i]);
        sum2 += Number(str[k]);
    }
    return sum1 === sum2;

};
function normalizeNum(num, digitsAmount) {
    let str = String(num);
    return formStr('0', digitsAmount - str.length) + str;
}

function formStr(data, length) {
    let res = '';
    for (let i = 0; i < length; i++) {
        res += data;
    }
    return res;
}
console.log(isLucky(normalizeNum(1203, 4))); // выведет true
console.log(isLucky(normalizeNum(312, 4))); // выведет true

console.log(isLucky(normalizeNum(6123, 6))); // выведет true
console.log(isLucky(normalizeNum(600123, 6))); // выведет true

console.log(isLucky(normalizeNum(700123, 6))); // выведет false
console.log(isLucky(normalizeNum(070123, 6))); // выведет false
//* все сходится

//* 94.6

function getLast(num) {
    let str = '';
    for (let i = 0; i < num; i++) {
        str += 9;
    };
    return Number(str);
}
console.log(getLast(6))

//* 94.7

function getFirst(num) {
    let str = '1';
    for (let i = 0; i < num - 2; i++) {
        str += 0;
    }
    return Number(str + '1');
}
console.log(getFirst(5))

//*94.8
function getLuckyTickets(digitsAmount) {
    let result = [];

    let first = getFirst(digitsAmount);
    let last = getLast(digitsAmount);

    for (let i = first; i <= last; i++) {
        let ticketNum = normalizeNum(i, digitsAmount);

        if (isLucky(ticketNum)) {
            result.push(ticketNum);
        }
    }

    return result;
}

function getFirst(num) {
    let str = '1';
    for (let i = 0; i < num - 2; i++) {
        str += 0;
    }
    return Number(str + '1');
}

function getLast(num) {
    let str = '';
    for (let i = 0; i < num; i++) {
        str += 9;
    };
    return Number(str);
}
function isLucky(num) {
    let str = String(num);
    let col = str.length / 2;
    let sum1 = 0
    let sum2 = 0
    for (let i = 0, k = col; i < col; i++, k++) {
        sum1 += Number(str[i]);
        sum2 += Number(str[k]);
    }
    return sum1 === sum2;

};
function normalizeNum(num, digitsAmount) {
    let str = String(num);
    return formStr('0', digitsAmount - str.length) + str;
}

function formStr(data, length) {
    let res = '';
    for (let i = 0; i < length; i++) {
        res += data;
    }
    return res;
}
console.log(getLuckyTickets(4));

//* 95.1
//* 1 т.к переменная num глобальная

//* 95.2
//* 2 т.к переменная была изменена пере вызовом функции 

//* 95.3
//* 1,2 

//* 95.4
//* undefined т.к переменная находится в локальной области видимости

//* 95.5 
//* 5 т.к фунция возвращает значение 

//* 95.6
//* 2 вызов функции изменил значение num

//* 95.7
//* 1 т.к переменная обьявленна в фунции не меняет значение глобальной

//* 95.8
//* 2 вызов функции присвоил другое значение 

//* 95.9
//* 1 фунция не вызывалась 

//* 95.10
//* 1

//* 95.11
//* 1

//* 95.12
//* 1

//* 95.13
//* 4 при каждом вызове значение увеличчивалось на 1

//* 95.14
//* 1

//* 95.15
//* 2 

//* 96.1
//* 1

//* 96.2
//* 1


//* 96.3
//* 1

//* 96.4
//* 2

//* 96.5
//* 1

//* 96.6
//* 2

//* 96.7
//* 1

//* 96.8
//* 1

//* 96.9
//* 2

//* 96.10 
//* 1

//*97.1

// function func() {
// 	return '!';
// }

// alert(func)
//* 98.1

function func() {
    return 'str';
}
func();
//* 98.2
alert(func());
//*98.3
alert(func);
//* 98.4
func = 123;
alert(func);

//* 98.5
function func1() {
    return 3;
}
func1();

//* 98.6
let func2 = func1;

//* 98.7

alert(func2() + func1());

//* 98.8
let func1 = function () {
    return 1;
}
func1();

//* 98.9
let func2 = function () {
    return 2;
}
func2();

//* 98.10
alert(func1() + func2());

//* 99.1
//* Function Declaration

//* 99.2
//* Function Expression

//* 99.3

fav();
function fav() {
    return 1;
};

//* 99.4

fel();
let fel = function () {
    return 1;
};

//* 99.5
let func1 = function () {
    alert('!')
};
let func2 = function () {
    alert('!')
};
function func3() {
    alert('!')
}; //* можно не ставить

//* 100.1
//* Function Declaration

//* 100.2
//* Function Expression


//* 100.3
//* Function Expression

//* 100.4
//* Function Expression

//* 100.5
//* Function Expression

//* 100.6
//* Function Expression

//* 100.7
//* Function Expression

//* 100.8
//* Function Expression

//* 100.9
//* Function Expression

//* 100.10
//* Function Expression

//* 100.11
//* Function Expression

//* 100.12
//* Function Declaration

//* 100.13
//* Function Expression

//* 100.14
//* Function Declaration

//* 100.15
//* Function Declaration

//* 100.16
//* Function Declaration

//* 100.17
//* Function Expression

//* 100.18
//*  Function Declaration 

//* 100.19
//* Function Declaration

//* 100.20
//* Function Expression

//* 100.21
//* Function Expression

//* 100.22
//* Function Declaration 

//* 100.23
//* Function Declaration

//* 101.1

const arr = [function () { return 1 }, function () { return 2 }, function () { return 3 }];

//*101.2

console.log(arr[2]())

//* 101.3
console.log(arr[0]() + arr[1]() + arr[2]())

//* 101.4

for (let el of arr) {
    console.log(el())
}

//* 102.1

const obj = {
    f1: function () { return 1 },
    f2: function () { return 2 },
    f3: function () { return 3 }
};
console.log(obj.f1() + obj.f2() + obj.f3());

//* 102.2
for (let key in obj) {
    console.log(obj[key]())
}

//* 102.3
const math = {
    square: function (arr) {
        let result = [];
        for (let el of arr) {
            result += el * el;
        }
        return result;
    },
    cube: function (arr) {
        let result = [];
        for (let el of arr) {
            result += el * el * el;

        }
        return result;
    },
    sum: function (arr) {
        let result = [];
        for (let el of arr) {
            result += el;

        }
        return result;
    }
}