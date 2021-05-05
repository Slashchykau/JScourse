'use strict'
//* 148.1

const e1 = document.querySelector('#elem1');
const e2 = document.querySelector('#elem2');
const e3 = document.querySelector('#elem3');
console.log(e1, e2, e3);

//* 148.2

const p1 = document.querySelector('#block p');
console.log(p1)

//* 148.3
const p2 = document.querySelector('.block p')
console.log(p2)

//* 148.4

const www = document.querySelector('.www');
console.log(www)

//* 149.1

const b1 = document.querySelector('#button1');
const b2 = document.querySelector('#button2');
const b3 = document.querySelector('#button3');
b1.addEventListener('click', () => alert('1'));
b2.addEventListener('click', () => alert('2'));
b3.addEventListener('click', () => alert('3'));

//* 150.1

const btn = document.querySelector('.btn');
btn.addEventListener('dblclick', () => alert('hello'));

//* 150.2

const btn1 = document.querySelector('.btn1');
btn1.addEventListener('mouseover', () => alert('hi'));

//* 150.3

const btn2 = document.querySelector('.btn2');
btn2.addEventListener('mouseout', () => alert('bye'));

//* 151.1

function func1() {
    alert(1);
}

function func2() {
    alert(2);
}

const btn11 = document.querySelector('#button11');
const btn12 = document.querySelector('#button21');
btn11.addEventListener('click', func1);
btn12.addEventListener('click', func2);

//*  152.1

const el11 = document.querySelector('#elem11');
const el21 = document.querySelector('#elem21');
const el31 = document.querySelector('#elem31');
const el41 = document.querySelector('#elem41');
const el51 = document.querySelector('#elem51');

function func() {
    alert('message');
}
el11.addEventListener('click', func);
el21.addEventListener('click', func);
el31.addEventListener('click', func);
el41.addEventListener('click', func);
el51.addEventListener('click', func);


//* 153.1

function func11() {
    alert('1');
}

function func21() {
    alert('2');
}

function func31() {
    alert('3');
}

const el = document.querySelector('#elem');
el.addEventListener('click', func11);
el.addEventListener('click', func21);
el.addEventListener('click', func31);

//* 153.2
const btn3 = document.querySelector('.btn3');
btn3.addEventListener('dblclick', () => alert(1));
btn3.addEventListener('dblclick', () => alert(2));
btn3.addEventListener('dblclick', () => alert(3));



