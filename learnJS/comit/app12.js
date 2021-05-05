'use strict';

//* 211.1

const p1 = document.querySelector('.p1');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    setInterval(() => {
        p1.innerHTML++;
    }, 1000)
})

//* 211.2
const p2 = document.querySelector('.p2');
const btn1 = document.querySelector('.btn1');

btn1.addEventListener('click', () => {
    const set = setInterval(() => {
        if (p2.innerHTML == 0) { clearInterval(set) }
        else { p2.innerHTML--; }
    }, 1000)
})

//* 211.3

const el = document.querySelector('#el');
el.addEventListener('focus', () => {
    setInterval(() => {
        el.value *= el.value
    }, 1000)
});

//* 211.4
const el1 = document.querySelector('#el1');
const p3 = document.querySelector('.p3');
el1.addEventListener('blur', () => {
    let a = el1.value;
    const b = setInterval(() => {
        if (a == 0) { p3.innerHTML = a; clearInterval(b) }
        p3.innerHTML = a;
        a--;
    }, 1000)
})

//* 211.5

const el2 = document.querySelector('#el2');
const p4 = document.querySelector('.p4');
const btn3 = document.querySelector('.btn3');
btn3.addEventListener('click', () => {
    let a = el2.value
    const b = setInterval(() => {
        if (a == 0) { clearInterval(b) };
        p4.innerHTML = a;
        a--;
    }, 1000)
});

//* 211.6

const p5 = document.querySelector('.p5');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');

const func = () => {
    const b = setInterval(() => {
        p5.innerHTML++
        btn4.removeEventListener('click', func);
        btn5.addEventListener('click', () => {
            clearInterval(b);
            btn4.addEventListener('click', func)
        })
    }, 1000)
};
btn4.addEventListener('click', func)

//* 211.7

const p6 = document.querySelector('.p6');
p6.addEventListener('click', () => {
    setInterval(() => {
        p6.classList.toggle('colRed');
    }, 800)
})

//* 211.8
const p7 = document.querySelector('.p7');
const liveTime = setInterval(() => {
    p7.innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`
}, 1000);


//* 212.1

const p8 = document.querySelector('.p8');
setTimeout(() => {
    p8.innerHTML = 'HI';
}, 8000);

//* 212.2

let i = 0;
const setT = () => {
    setTimeout(() => {
        console.log(i);
        i++;
        setT();
    }, 1000)
};
// setT();

//* 213.1

const ol = document.querySelector('#elem');
const li = document.createElement('li');
li.innerHTML = 'пункт';
ol.appendChild(li);

//* 213.2

const button = document.querySelector('#button');
button.addEventListener('click', () => {
    const li1 = document.createElement('li');
    li1.innerHTML = 'add';
    ol.appendChild(li1);
})

//* 214.1

const ol1 = document.querySelector('#elem1');
const button1 = document.querySelector('#button1');
button1.addEventListener('click', () => {
    const li1 = document.createElement('li');
    li1.innerHTML = 'add';
    ol1.appendChild(li1);
})
ol1.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li')
        e.target.innerHTML += '!';
})

//* 215.1

const ul = document.querySelector('ul');
for (let i = 0; i < 10; i++) {
    let p = document.createElement('li');
    p.innerHTML = i;
    ul.appendChild(p);
}

//* 216.1

const div = document.querySelector('div');
const p9 = document.querySelector('.p9');

for (let i = 0; i < 5; i++) {
    let inp = document.createElement('input');
    inp.addEventListener('blur', () => {
        p9.innerHTML += inp.value;
    })
    div.appendChild(inp);
}

//* 217.1

let parent = document.querySelector('#parent');

let arr = [1, 2, 3, 4, 5];

for (let elem of arr) {
    let p = document.createElement('p');
    p.innerHTML = elem;
    parent.appendChild(p);
    p.addEventListener('click', () => {
        p.innerHTML++;
    })
};

//* 218.1

const ul1 = document.querySelector('#elem11');
const arr11 = [1, 2, 3, 4, 5];
// for(let el of arr11) {
//     const li1 = document.createElement('li');
//     li1.innerHTML = el;
//     ul1.appendChild(li1);
// };

//* 218.2

// for(let el of arr11) {
//     const li1 = document.createElement('li');
//     li1.innerHTML = el;
//     ul1.appendChild(li1);
//     li1.addEventListener('click', () =>{
//         alert(li1.innerHTML);
//     })
// };

//* 218.3

// for(let el of arr11) {
//     const li1 = document.createElement('li');
//     li1.innerHTML = el;
//     ul1.appendChild(li1);
//     li1.addEventListener('click', () =>{
//         li1.innerHTML += '!';
//     })
// };

//* 218.4

for (let el of arr11) {
    const li1 = document.createElement('li');
    li1.innerHTML = el;
    ul1.appendChild(li1);
    const f = () => {
        li1.innerHTML += '!';
        li1.removeEventListener('click', f);
    };
    li1.addEventListener('click', f);

};

//* 219.1

const tab = document.querySelector('#table');

// for (let i = 0; i < 5; i++) {
//     const tr = document.createElement('tr');
//         tab.appendChild(tr)
//     for (let i = 0; i < 5; i++) {
//         const td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     }
//* 219.2

// for (let i = 0; i < 10; i++) {
//     const tr = document.createElement('tr');
//         tab.appendChild(tr)
//     for (let i = 0; i < 5; i++) {
//         const td = document.createElement('td');
//         tr.appendChild(td);
//     }
//     }

//* 219.3

for (let i = 0; i < 10; i++) {
    const tr = document.createElement('tr');
    tab.appendChild(tr)
    for (let i = 0; i < 5; i++) {
        const td = document.createElement('td');
        td.innerHTML = 'x';
        tr.appendChild(td);
    }
}

//* 219.4

const in3 = document.querySelector('#el3');
const in4 = document.querySelector('#el4');
const btnG = document.querySelector('#button2');
btnG.addEventListener('click', () => {
    const a = Number(in3.value);
    const b = Number(in4.value);
    for (let i = 0; i < a; i++) {
        const tr = document.createElement('tr');
        tab.appendChild(tr)
        for (let i = 0; i < b; i++) {
            const td = document.createElement('td');
            td.innerHTML = 'x';
            tr.appendChild(td);
        };
    };

});

//* 220.1

const tab1 = document.querySelector('#table1');
// let k  = 1;
// for(let i  = 0; i < 5; i++) {
//     const tr = document.createElement('tr');
//     tab1.appendChild(tr);
//     for(let i = 0; i < 5; i++) {
//         const td = document.createElement('td');
//         td.innerHTML = k;
//         k++;
//         tr.appendChild(td);
//     }
// }

//* 220.2

let k = 2;
for (let i = 0; i < 5; i++) {
    const tr = document.createElement('tr');
    tab1.appendChild(tr);
    for (let i = 0; i < 5; i++) {
        const td = document.createElement('td');
        td.innerHTML = k;
        k += 2;
        tr.appendChild(td);
    }
}

//* 221.1

const tab2 = document.querySelector('#table2');

let arr111 = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];

// for(let elem of arr111) {
// const tr = document.createElement('tr');
// tab2.appendChild(tr);
//     for(let el of elem) {
//         const td = document.createElement('td');
//         td.innerHTML = el;
//         tr.appendChild(td);
//     };
// };

//* 221.2

for (let elem of arr111) {
    const tr = document.createElement('tr');
    tab2.appendChild(tr);
    for (let el of elem) {
        const td = document.createElement('td');
        td.innerHTML = el * el;
        tr.appendChild(td);
    };
};