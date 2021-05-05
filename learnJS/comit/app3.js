//* 115.5

const arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];

function funcArr(arr) {
    let str = [];
    for (let el of arr) {
        if (typeof el === 'object') {
            str = str.concat(funcArr(el));
        } else (str.push(el));
    };
    return str;

};

console.log(funcArr(arr));

//* 115.6

const arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function foArr(arr) {
    let result = [];
    for (let el of arr) {
        if (typeof el === 'object') {
            result = [];
            let a = foArr(el);
            if (a.length >= 1) {
                console.log(a)
            }
        } else { result.push(el) };
    }
    return result;
}
foArr(arr);


//* 115.7 не решил сложно (Дан многомерный массив произвольного уровня вложенности. Подсчитайте с помощью рекурсии самый максимальный уровень вложенности этого массива.)
const arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];

function forArr(arr) {
    let k = 1;
    if (Array.isArray(arr)) {
        for (let i = 0; i < arr.length; i++) {
            if (Array.isArray(arr[i])) {
                k++;
                k += forArr(arr[i]);
            };
        };

    };
    return k;
};
console.log(forArr(arr));
//* 115.7 не решил сложно 


//* 116.1
const arr = [1, 2, 3, 4, 5, 6, 7];

let result = arr.map(function (el) { return el * el; });

//* 116.2

const arr = [1, 2, 3, 4,];
const result = arr.map(function (el) { return el + '!' })
console.log(result);

//* 116.3

const arr = ['qwqeqw', 'qweqwe', 'rerere'];
const res = arr.map((function (e) { return e.split('').reverse().join('') }))
console.log(res);

//* 116.4
let arr = ['123', '456', '789'];
let res = arr.map((function (e) { return e.split("") }))
console.log(res);

//* 116.5

let arr = [1, 2, 3, 1, 4, 5];

let res = arr.map((function (e, i) { return e * i }))
console.log(res)

//* 117.1

let arr = [1, 2, 3, 1, 4, 5];
let sum = 0;
arr.forEach(function (e) { sum += e; });
console.log(sum);

//* 118.1

let arr = [1, 2, 3, -1, -4, 5];
console.log(arr.filter(e => e > 0));

//* 118.2

let arr = [1, 2, 3, -1, -4, 5];
console.log(arr.filter(e => e < 0));

//* 118.3

let arr = [10, 2, 3, -13, -4, 53];
console.log(arr.filter(e => e < 10 && e > 0))

//* 118.4

const arr = ['qweqwe', 'qweqwe', 'qwe', 'qwe', 'qwe', 'qwe', 'qwe', 'qwe',];
console.log(arr.filter(e => e.length > 5));

//* 118.5

const arr = [1, 2, 3, 22, 33, 12];
console.log(arr.filter((e, i) => e * i < 30));

//* 118.6

const arr = [1, 2, [3, 4], 5, [6, 7]];
console.log(arr.filter(e => typeof e != 'object'));

//* 118.7

let arr = [10, 2, 3, -13, -4, 53];
console.log(arr.filter(e => e < 0).length)

//* 119.1

let arr = [10, 2, 3, 53];
console.log(arr.every(e => e > 0));

//* 119.2

let arr = [1, 2, 3, 5];
console.log(arr.every((e, i) => e * i < 30));

//* 120.1 

let arr = [10, 2, 3, -13, -4, 53];
console.log(arr.some(e => e > 0));

//* 120.2

let arr = [10, 2, 3, -13, -4, 53];
console.log(arr.some((e, i) => e * i < 30));

//* 121.1

let arr = [1, 2, 3, 4, 5];
function func(num1, num2, num3, num4, num5) {
    return num1 + num2 + num3 + num4 + num5;
}
console.log(func(...arr))

//* 121.2
//* 260

//* 121.3 

const arr = [1, 2, 3];
console.log(Math.min(...arr))

//* 122.1
//* 'a',1, 2, 3,'b', 'c',4, 5, 6

//* 122.2
//* 'a',1, 2, 3 ,1, 2, 3, 'b', 'c'

//* 122.3
//* 'a', 'b', 'c', 1, 2, 3, 4, 5, 6

//* 122.4
//* 0, 1, 2, 3,4, 5, 6, 7, 8, 9

//* 122.5
//* 1, 2, 3


//* 123.1
//* '1','2','3','4','5'

//* 123.2
//* 'a','1','2','3','4','5'

//* 123.3
//* '1','2','3','4','5','6','7','8','9'

//* 123.4
//* 'a','b','c','1','2','3','4','5'


//* 125.1


function f1(...nums) {
    let sum = 0;
    for (let num of nums) {
        sum += num;
    };
    return sum / nums.length;
}
console.log(f1(1, 2, 3, 4))

//* 125.2

function f2(arr1, arr2, arr3) {
    let result = [];
    return result.push(arr1, arr2, arr3);;
};
console.log(f2([1], [2], [3]))

//* 125.3

function f3(arr1, arr2, arr3) {
    let result = [];
    return result.concat(arr1, arr2, arr3);
}
console.log(f3([1], [2], [3]));

//* 126.1

function inArray(elem, arr) {
    return arr.indexOf(elem) != -1;
}

function inArrays(elem, arrs) {
    for (let el of arrs) {
        if (!inArray(elem, el)) { return false }
    }
    return true;
}
function getInt(...arrs) {
    let result = [];
    let arr1 = arrs.shift();
    for (let el of arr1) {
        if (inArrays(el, arrs)) { result.push(el) }
    }
    return result;
}
console.log(getInt([1, 2, 3, 4], [2, 3], [3, 4, 3, 2, 1], [1, 3, 2]));