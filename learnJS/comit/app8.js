'use strict';

const div = document.querySelector('.div');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    div.style.width = '200px';
    div.style.height = '200px';
    div.style.border = '1px solid';

});
const div1 = document.querySelector('.div1');
const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', () => {
    div1.style.marginTop = '20px';
    div1.style.fontSize = '20px';
    div1.style.backgroundColor = 'orange';

});

//* 169.3

const li = document.querySelectorAll('li')
const btn2 = document.querySelector('.btn2');

btn2.addEventListener('click', function () {
    for (let el of li) { el.style.cssFloat = 'left' }
});

//* 170.1
//* т.к в css файле под классом color red лежит цвет green

//* 170.2

const p = document.querySelector('p');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const btn5 = document.querySelector('.btn5');
// btn3.addEventListener('click', () => {
//     p.classList.add('addRed')
// })
// btn4.addEventListener('click', () => {
//     p.classList.add('addBold')
// })
// btn5.addEventListener('click', () => {
//     p.classList.add('lineThrough')
// });

//* 170.3
btn3.addEventListener('click', () => {
    p.classList.toggle('addRed')
})
btn4.addEventListener('click', () => {
    p.classList.toggle('addBold')
})
btn5.addEventListener('click', () => {
    p.classList.toggle('lineThrough')
});


//* 171.1

const liFirst = document.querySelector('#elem').firstElementChild;
liFirst.setAttribute('class', 'addRed');

//* 171.2

const liLast = document.querySelector('#elem').lastElementChild;
liLast.setAttribute('class', 'addRed');

//* 171.3

const all = document.querySelector('#elem').children;

for (let el of all) {
    el.innerHTML += '!';
}

//* 171.4

const pEl = document.querySelector('#elem1').parentElement;

pEl.style.border = '1px solid';
pEl.style.borderColor = 'red';


//* 171.5

const pEl1 = pEl.parentElement;

pEl1.style.border = '1px solid';
pEl1.style.borderColor = 'red';

//* 171.6

const el11 = document.querySelector('#elem11');
el11.closest('div');

//* 171.7

el11.closest('.www');

//* 171.8
const el12 = document.querySelector('#elem12');
el12.previousElementSibling.innerHTML += "!";

//* 171.9

el12.nextElementSibling.innerHTML += "!";

//* 171.10

el12.nextElementSibling.nextElementSibling.innerHTML += "!";

//* 171.11

const el13 = document.querySelector('#elem13');
const up = el13.previousElementSibling.innerHTML;
const down = el13.nextElementSibling.innerHTML;
el13.previousElementSibling.innerHTML = down;
el13.nextElementSibling.innerHTML = up;

//* 172.1

const el14 = document.getElementById('elem14').innerHTML = 'abb';

//* 172.2

const allLi = document.getElementsByTagName('li');
for (let el of allLi) {
    // el.style.color = 'red';
}
//* 172.3

const allP = document.getElementsByClassName('www');
for (let el of allP) {
    el.style.color = 'red';
};

//* 173.1

const parent = document.querySelector('#parent');
parent.querySelectorAll('.www');
parent.querySelectorAll('.ggg');

//* 174.1

const div15 = document.querySelector('#elem15');

div15.addEventListener('click', () => {
    div15.innerHTML += div15.dataset.text;

})

//* 174.2

const div16 = document.querySelectorAll('.div22');
for (let el of div16) {
    el.addEventListener('click', () => {
        el.innerHTML += el.dataset.num;
    })
};

//* 174.3

const btn6 = document.querySelector('.btn6');
btn6.addEventListener('click', () => {
    btn6.dataset.count++;

});
btn6.addEventListener('dblclick', () => {
    alert(btn6.dataset.count);

});

//* 174.4

const inp16 = document.querySelector('#elem16');

inp16.addEventListener('blur', () => {
    inp16.value.length >= Number(inp16.dataset.length) ? alert('good')
        : alert('мало');

});

//* 174.5

const inp17 = document.querySelector('#elem17');

inp17.addEventListener('blur', () => {
    if (Number(inp17.dataset.max) >= inp17.value.length && inp17.value.length >= Number(inp17.dataset.min)) {
        alert('all good')
    } else { alert('что то не так'); }
})

//* 174.6

const div18 = document.querySelector('#elem18');

div18.addEventListener('click', () => {
    div18.innerHTML += Number(div18.dataset.productPrice) * Number(div18.dataset.productAmount);
})

//* 174.7

const allDiv = document.querySelectorAll('div');

for (let i = 0; i < allDiv.length; i++) {
    allDiv[i].setAttribute('data-num', i);
    console.log(allDiv[i])
}