'use strict';

//* 222.1

let employees = [
    { name: 'employee1', age: 30, salary: 400 },
    { name: 'employee2', age: 31, salary: 500 },
    { name: 'employee3', age: 32, salary: 600 },
];

const table = document.querySelector('#table');

for (let el of employees) {

    const tr = document.createElement('tr');
    table.appendChild(tr);
    const td = document.createElement('td');
    tr.appendChild(td);
    td.innerHTML = el.name;
    const td1 = document.createElement('td')
    td1.innerHTML = el.age;
    tr.appendChild(td1);
    //* 222.2
    td1.addEventListener('click', () => {
        td1.innerHTML++;
    })
    //* 222.3
    const td2 = document.createElement('td')
    td2.innerHTML = el.salary;
    tr.appendChild(td2);
    td2.addEventListener('click', () => {
        const a = Number(td2.innerHTML);
        td2.innerHTML = a + Math.round(a * 10 / 100);
    })
};

//* 223.1

const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    const tr = document.createElement('tr');
    table.appendChild(tr);
    for (let i = 0; i < 3; i++) {
        const td = document.createElement('td');
        tr.appendChild(td);
        td.innerHTML = 'x';
    }
})

//*  223.2

const table1 = document.querySelector('#table1');
const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', () => {
    const tr = document.createElement('tr');
    const allTR = document.querySelectorAll('#table1 tr');
    table1.appendChild(tr);
    for (let el of allTR) {
        const td = document.createElement('td');
        td.innerHTML = '2';
        el.appendChild(td);
        tr.innerHTML = el.innerHTML;
    }

})

//* 224.1

const btn3 = document.querySelector('.btn3');

btn3.addEventListener('click', () => {
    const els = document.querySelectorAll('#table1 td');
    for (let el of els) {
        el.innerHTML *= el.innerHTML;
    }
})

//* 225.1

const allTD = document.querySelectorAll('#table2 td');
let length = allTD.length;
for (let el of allTD) {
    el.innerHTML = length--;
}

//* 226.1

const allTR = document.querySelectorAll('#table3 tr');
for (let i = 0; i < allTR.length; i++) {
    const allTD = allTR[i].querySelectorAll('td');
    for (let j = 0; j < allTD.length; j++) {
        allTD[j].innerHTML = i + 1 + '.' + (j + 1);
    }
};

//* 227.1

const allTD4 = document.querySelectorAll('#table4 td');

for (let i = 0; i < allTD4.length; i++) {
    allTD4[i].addEventListener('click', function () {
        this.innerHTML = i;
    })
}

//* 228.1

let tds = document.querySelectorAll('#table5 td');

let i = 1;
for (let td of tds) {
    function func() {
        this.innerHTML = i;
        i++;
        this.removeEventListener('click', func);
    };
    td.addEventListener('click', func);
};

//* 228.2

let tds1 = document.querySelectorAll('#table6 td');

let i1 = 1;
for (let td of tds1) {
    td.addEventListener('click', function () {
        this.innerHTML = i1;
        if (i1 == 1) {
            i1 = 2;
        } else if (i1 == 2) {
            i1 = 3;
        } else {
            i1 = 1;
        };
    })
}