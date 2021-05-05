'use strict';
//* 175.1

const in1 = document.querySelector('#in1');
const p1 = document.querySelector('.p1');
in1.addEventListener('blur', () => {
    p1.innerHTML += in1.value;
});

//* 175.2
const btn = document.querySelector('.btn');
const p2 = document.querySelector('.p2');
const in2 = document.querySelectorAll('#in2');
btn.addEventListener('click', () => {
    let sum = 0;
    for (let el of in2) {
        sum += Number(el.value);
    }
    p2.innerHTML += sum;
})

//* 175.3

const in3 = document.querySelector('#in3');
in3.addEventListener('blur', () => {
    const a = in3.value.split('');
    let sum = 0;
    for (let el of a) {
        sum += Number(el);
    }
    in3.value = sum;
});

//* 175.4

const in4 = document.querySelector('#in4');
in4.addEventListener('blur', () => {
    const a = in4.value.split('');
    let sum = 0;
    for (let el of a) {
        sum += Number(el);
    }
    in4.value = sum / a.length;
});

//* 175.5

const in5 = document.querySelector('#in5');
const in6 = document.querySelectorAll('#in6');

in5.addEventListener('blur', () => {
    const a = in5.value.split(' ');
    for (let i = 0; i < a.length; i++) {
        in6[i].value = a[i];
    }
})


//* 175.6

const in7 = document.querySelector('#in7');

in7.addEventListener('blur', () => {
    const a = in7.value.split(' ');
    let result = [];
    for (let el of a) {
        result.push(el.slice(0, 1).toUpperCase() + el.slice(1));
    }
    console.log(result);
    in7.value = result.join(' ');
});

//* 175.7 

const in8 = document.querySelector('#in8');

in8.addEventListener('blur', () => {
    const a = in8.value.split(' ');
    in8.value = a.length;
})


//* 175.8

const in9 = document.querySelector('#in9');

in9.addEventListener('blur', () => {
    in9.value = in9.value.split('.').join('-');
})

//* 175.9

const in10 = document.querySelector('#in10');

in10.addEventListener('blur', () => {
    let a = in10.value;
    let b = a.split('').reverse().join('');
    if (a === b) {
        in10.value += ' good';
    } else {
        in10.value += ' bad';
    }
})

//* 175.10

const in11 = document.querySelector('#in11');

in11.addEventListener('blur', () => {
    const a = in11.value.split('');
    let b = 'false';
    for (let el of a) {
        Number(el) === 3 ? b = 'true' : b = b;
    }
    in11.value = b;
})

//* 175.11

const btn1 = document.querySelector('.btn1');
const p3 = document.querySelectorAll('.p3');
btn1.addEventListener('click', () => {
    let i = 1;
    for (let el of p3) {
        el.innerHTML += i;
        i++;
    }
})

//* 175.12

const allLink = document.querySelectorAll('.a');
for (let el of allLink) {
    el.innerHTML += '(' + el.href + ')';
}

//* 175.13

const allLink1 = document.querySelectorAll('.a1');
for (let el of allLink1) {
    let a = el.href.slice(0, 7);
    if (a === 'http://') {
        el.innerHTML = el.href += '&rarr;';
    } else { el.innerHTML = el.href };
}

//* 175.14

const p4 = document.querySelectorAll('.p4');
for (let el of p4) {
    el.addEventListener('click', () => {
        el.innerHTML *= el.innerHTML;
    })
};

//* 175.15

const in12 = document.querySelector('#in12');

in12.addEventListener('blur', () => {
    const date = in12.value = in12.value.split('.');

    function gDWeek([year, month, day]) {
        const date = new Date(year, month - 1, day).getDay();
        switch (date) {
            case 0: return 'Воскресенье';
            case 1: return 'Понедельник';
            case 2: return 'Вторник';
            case 3: return 'Среда';
            case 4: return 'Четверг';
            case 5: return 'Четверг';
            case 6: return 'Суббота';

        }
    }
    in12.value = gDWeek(date);
});

//* 175.16

const in13 = document.querySelector('#in13');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
btn2.addEventListener('click', () => {
    in13.value++;
})
btn3.addEventListener('click', () => {
    in13.value > 0 ? in13.value-- : in13.value = 0;
})


//* 175.17

const in14 = document.querySelector('#in14');
const p5 = document.querySelectorAll('.p5');
for (let el of p5) {
    el.addEventListener('click', () => {
        in14.value++;
    })
};

//* 175.18

const in15 = document.querySelector('#in15');
const p6 = document.querySelector('.p6');

in15.addEventListener('focus', function () {
    document.body.onkeyup = function (event) {
        const e = event || window.event;
        const code = e.keyCode || e.which;
        if (code == 13 && in15.value != '') {
            p6.innerHTML += in15.value + ',';
            in15.value = '';
        }
    }
}
)
//* костыль из интернета в книге решения не нашел((( если я что то не дочитал, кинь ревью ссылку

//* 175.19

const div = document.querySelectorAll('div');
for (let el of div) {
    let a = el.innerHTML;
    if (a.length > 10) {
        el.innerHTML = a.slice(0, 10) + '...';
    }
}

//* 175.20

const in16 = document.querySelector('#in16');
in16.addEventListener('blur', () => {
    if (Number(in16.value) > 0 && Number(in16.value) < 110) {
        in16.style.color = 'green';
    } else {
        in16.style.color = 'red';
    }
})

//* 175.21
const in17 = document.querySelector('#in17');
const btn4 = document.querySelector('.btn4');
btn4.addEventListener('click', () => {
    in17.value = Math.floor(Math.random() * (99999999 - 10000000 + 1)) + 10000000;
})

//* 175.22

const in18 = document.querySelector('#in18');
const btn5 = document.querySelector('.btn5');
function shuffle(arr) {
    let res = [];
    while (arr.length > 0) {
        let random = getRandomInt(0, arr.length - 1);
        let elem = arr.splice(random, 1)[0];
        res.push(elem);
    }
    return res.join('');
};
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
btn5.addEventListener('click', () => {
    in18.value = shuffle(in18.value.split(''));
});

//* 175.23

const check = document.querySelector('#check');
const a2 = document.querySelector('.a2');
a2.addEventListener('click', () => {
    check.checked === true ?
        check.checked = false :
        check.checked = true
})

//* 175.24

const in19 = document.querySelector('#in19');
const in20 = document.querySelector('#in20');

in19.addEventListener('keyup', () => {
    in20.value = Number(in19.value) + 32;
});

//* 175.25

const in21 = document.querySelector('#in21');
const btn6 = document.querySelector('.btn6');
const p7 = document.querySelector('.p7');

function factorial(num) {
    let f = 1;
    for (let i = 1; i <= num; i++) {
        f *= i;
    }
    return f;
}
btn6.addEventListener('click', () => {
    p7.innerHTML = factorial(in21.value)
})

//* 175.26

const in22 = document.querySelectorAll('#in22');
const btn7 = document.querySelector('.btn7');
const p8 = document.querySelector('.p8');
function roots([a, b, c]) {
    let d = b * b - 4 * a * c;
    let x = 0;
    let x1 = 0;
    if (d < 0) {
        return 'корней нет';
    } else if (d === 0) {
        x = (-b + Math.sqrt(d)) / (2 * a);
        return x;
    } else if (d > 0) {
        x = (-b + Math.sqrt(d)) / (2 * a);
        x1 = (-b - Math.sqrt(d)) / (2 * a);
        return `${x},${x1}`
    }
}
btn7.addEventListener('click', () => {
    let a = [];
    for (let el of in22) {
        a.push(Number(el.value));
    }
    p8.innerHTML = roots(a);
});
