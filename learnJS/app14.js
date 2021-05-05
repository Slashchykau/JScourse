'use strict';

//* 229.1

const btn = document.querySelector('#button');
const ul = document.querySelector('#parent');
const li = document.querySelector('#elem')
btn.addEventListener('click', () => {
    ul.removeChild(li);
})