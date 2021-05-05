//* 103.1

test(function () { return 1; },
    function () { return 2; },
    function () { return 3 });
function test(f1, f2, f3) {
    return console.log(f1() + f2() + f3())
}
//* 103.2

const get1 = function () { return 1; };
const get2 = function () { return 2; };
const get3 = function () { return 3; };
const test = function (f1, f2, f3) { return console.log(f1() + f2() + f3()) };
test(get1, get2, get3);

//* 103.3

function func1() { return 1 };
function func2() { return 2 };
function func3() { return 3 };

function test(f1, f2, f3,) { return f1() + f2() + f3(); }
console.log(test(func1, func2, func3));

//* 103.4
const func1 = function () { return 1 };
const func2 = function () { return 2 };
const func3 = function () { return 3 };

function test(f1, f2, f3,) { return f1() + f2() + f3(); }
console.log(test(func1, func2, func3));

//* 103.5
test(function (num) {
    return num * num * num;
});

function test(func) {
    console.log(func(3));
}

//* 103.6
function func(num) {
    return num * num * num;
};

function test() {
    console.log(func(3));
};
test();

//* 103.7

const func = function (num, num1) {
    return num + num1;
};

const test = function () {
    console.log(func());
};
test();

//* 103.8

const func = function (num, num1) {
    return num + num1;
};

const test = function () {
    console.log(func(2, 3));
};
test();

//*103.9
function test(num, func1, func2) {
    return func1(num) + func2(num);
}
function f1(num) { return num * num };
function f2(num) { return num * num * num };
console.log(test(3, f1, f2))


//* 103.10

function test(arr, f1) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = f1(arr[i]);
    }
    return arr;
}
const result = test([1, 2, 3, 4, 5], function (num) { return num * num });
console.log(result);

//* 103.11

function test(arr, f1) {

    for (let i = 0; i < arr.length; i++) {
        arr[i] = f1(arr[i]);
    }
    return arr;
}
const result = test([1, 2, 3, 4, 5], function (num) { return num * num * num });
console.log(result);

//* 105.1

function test(num1, num2) {
    function square(num) { return num * num };
    function coube(num) { return num * num * num };
    return square(num1) + coube(num2);
}
console.log(test(2, 2))

//* 106.1
//* 1

//* 106.2
//* nothing

//* 106.3
//* nothing

//* 106.4
//* 1, 2

//* 106.5
//* 3

//* 106.6
//* 4

//* 106.7
//* 1

//* 106.8
//* 2

//* 106.9
//* 1

//* 106.10
//* 1

//* 106.11
//* 2

//* 106.12
//* 2

//* 106.13
//* undefined

//* 106.14
//* 1

//* 106.15
//* 2

//* 106.16
//* 1

//* 107.1

function func1() { return function () { return 1 } };
function func2() { return function () { return 2 } };
console.log(func1()() + func2()());

//* 107.2

function func() { return function () { return function () { return function () { return function () { return function () { return function () { return function () { return '!' } } } } } } } };

console.log(func()()()()()()()());

//* 107.3

function func(num1) { return function (num2) { return function (num3) { return num1 + num2 + num3 } } }

console.log(func(2)(3)(4))

//* 107.4

function func(num) {
    let arr = [];
    arr.push(num);
    return function (num1) {
        arr.push(num1);
        return function (num2) {
            arr.push(num2);
            return function (num3) {
                arr.push(num3);
                return function () {
                    return arr;
                }
            }
        }
    }
}

console.log(func(2)(3)(4)(5)())

//* 108.1
//* 3

//* 108.2
//* 3

//* 108.3
//* 3

//* 108.4
//* 1

//* 109.1

function test() {
    let num = 1;
    return function () { return num++ }
};

let func = test();
console.log(func())
console.log(func())

//*109.2

function test() {
    let num = 10;
    return function () { return num--; }
};
let func = test();
console.log(func());
console.log(func());

//* 109.3
function test() {
    let num = 10;
    return function () { if (num == 0) { return 'отсчет окончен' } return num--; };
};
let func = test();
console.log(func());
console.log(func()); console.log(func());
console.log(func()); console.log(func());
console.log(func()); console.log(func());
console.log(func()); console.log(func());
console.log(func()); console.log(func());

//* 109.4
//* 0 0 0 

//* 109.5
//* 0 0 0 

//* 109.6
//* 0 1 2 3  

//* 109.7
//* 0 1 2 3 

//* 109.8
//* 0 1 2 3 

//* 110.1
//* !

//* 110.2
//* nothing

//* 110.3
//* !

//* 110.4
//* function() {return '!';}


//* 110.5
//* !

//* 110.6
//* 3

//* 110.7
//* !

//* 110.8
//* !

//* 110.9
//* function() {return '!';}

//* 110.10
//* !

//* 110.11
//* 3

//* 110.12
(function () {
    return function () { return function () { return '!' } }
})()()();


//* 110.13
(function (num) {
    return function (num1) { return num + num1 }
})(1)(2);

//* 110.14

(function (num) {
    return function (num1) { return function (num2) { return num + num1 + num2 } }
})(1)(2)(3);

//* 110.15
//* 1

//* 110.16
//* error

//* 111.1
let func = (function () { let k = 0; return function () { console.log(k); return k++; } })();
func();

//* 111.2

let func = (function () { let k = 0; return function () { if (k === 5) { return k = 0 } else { console.log(k); return k++; } } })();
func();

//* 112.1 

const arr = ['qwqeqw', 'qweqwe', 'rerere'];

function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem));
    }

    return console.log(result);
}

each(arr, function (str) { return str.split('').reverse().join('') });

//* 112.2

const arr = ['qwqeqw', 'qweqwe', 'rerere'];

function each(arr, callback) {
    let result = [];

    for (let elem of arr) {
        result.push(callback(elem));
    }

    return console.log(result);
}

each(arr, function (str) { return str.slice(0, 1).toUpperCase() + str.slice(1) });

//* 112.3

const arr = [1, 2, 3, 4, 2, 54, 5, 4, 3];

function each(arr, callback) {
    let result = [];
    let i = 0;
    for (let elem of arr) {

        result.push(callback(elem, i++));
    }

    return console.log(result);
}
each(arr, function (el, i) { return el * i; });

//* 112.4
function filter(arr, callback) {
    let result = [];
    let i = 0;
    for (let elem of arr) {
        if (callback(elem)) {
            result.push([elem, i])

        } i++;

    }
    return result;
}
let result = filter([1, 2, 3, 4, 5], function (elem) {
    if (elem % 2 == 0) {
        return true;
    } else {
        return false;
    }
});

console.log(result);

//* 112.5
const arr = [-2, 2, 3, 3, -2, 5, 4, -4];

function filter(arr, callback) {
    let result = [];

    for (let elem of arr) {
        if (callback(elem)) {
            result.push(elem)

        };

    }
    return console.log(result);
}
filter(arr, function (elem) {
    if (elem > 0) {
        return true;
    } else {
        return false;
    }
});


//* 112.6
const arr = ['qw', '212312', 'qweqweq', '1', 'qwe'];
function filter(arr, callback) {
    let result = [];

    for (let elem of arr) {
        if (callback(elem)) {
            result.push(elem)

        };

    }
    return console.log(result);
}
filter(arr, function (elem) {
    if (elem.length <= 3) {
        return true;
    } else {
        return false;
    }
});

//* 112.7

function every(arr, callback) {
    for (let elem of arr) {
        if (!callback(elem)) { return false; }
    }
    return true;
}

let result = every([1, 2, 3, 4, 5], function (elem) {
    if (elem > 0) {
        return true;
    } else {
        return false;
    }
});

console.log(result);

//* 112.8
function some(arr, callback) {
    for (let elem of arr) {
        if (callback(elem)) { return true; }
    }
    return false;
}
let result = some([1, 2, 3, 4, 5], function (elem) {
    if (elem < 0) {
        return true;
    } else {
        return false;
    }
});

console.log(result);

//* 112.9

function alternate(arr, callback, callback1) {
    let result = [];
    let i = 0;
    for (let elem of arr) {
        if (i === 0 || i % 2 === 0) {
            result.push(callback(elem));
        } else { result.push(callback1(elem)); }
        i++;
    }
    return result;
}

let result = alternate(
    ['a', 'b', 'c', 'd', 'e'],
    function (elem) {
        return elem + '!';
    },
    function (elem) {
        return elem + '?';
    },
);

console.log(result); // выведет ['a!', 'b?', 'c!', 'd?', 'e!']

//* 113.1
let result = every([1, 2, 3, 4, 5], elem => elem > 0);

//* 113.2
let result = every([1, 2, 3, 4, 5], (elem, index) => elem * index > 10);

//* 113.3
let result = each(arr, (elem, index) => elem * index > 10);

//* 114.1 

function func(prevPrevNum, prevNum, i = 1) {
    if (i <= 10) {
        i++;
        prevPrevNum += prevNum;
        console.log(prevPrevNum)
        return func(prevNum, prevPrevNum, i)
    }
    return prevPrevNum;
}

func(1, 2)

//* 114.2

function func(prevPrevNum, prevNum) {
    let result = [];
    const g = function (prevPrevNum, prevNum, i = 1) {
        if (i <= 10) {
            i++;
            prevPrevNum += prevNum;
            result.push(prevPrevNum)
            return g(prevNum, prevPrevNum, i)
        }
        return prevPrevNum;
    };
    g(prevPrevNum, prevNum);
    return console.log(result)
}

func(1, 2)

//* 114.3

function getDigitsSum(num) { return getSum(getDigits(num)) };
function getDigits(num) {
    return String(num).split('')
}
function getSum(arr) {
    let sum = 0;
    for (let elem of arr) {
        sum += Number(elem);
    }
    return sum;
}
function reduceNum(num) {
    let col = getDigitsSum(num);
    if (col > 9) {
        col = getDigitsSum(col);
    } return col;
}
console.log(reduceNum(11238098))

//* 115.1

const obj = { a: 1, b: { c: 2, d: 3, e: 4 }, f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } } };
function func(obj) {
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            func(obj[key]);
        } else { console.log(obj[key]) };
    }
};
func(obj)

//* 115.2

let obj = { a: 1, b: { c: 2, d: 3, e: 4 }, f: { g: 5, j: 6, k: { l: 7, m: { n: 8, o: 9 } } } };
function func(obj) {
    let sum = 0;
    for (let key in obj) {
        if (typeof obj[key] === 'object') {
            sum += func(obj[key]);
        } else { sum += obj[key]; };
    }
    return sum;
};
console.log(func(obj));

//* 115.3
const arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
function func(arr) {
    let str = '';
    for (let el of arr) {
        if (typeof el === 'object') {
            str += func(el);
        } else { str += el; }
    }
    return str;
}
console.log(func(arr))

//* 115.4

let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function funcArr(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') {
            funcArr(arr[i]);
        } else (arr[i] = Math.pow(arr[i], 3));
    }
    return arr;
}
console.log(funcArr(arr))


