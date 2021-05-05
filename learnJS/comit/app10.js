'use strict';

//* 176.1

const tA = document.querySelector('#elem');
const p = document.querySelector('.p');
tA.addEventListener('blur', () => {
    p.innerHTML = tA.value
})

//* 177.1
const in1 = document.querySelector('#in1');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    in1.disabled = true;
})

//* 177.2
const btn1 = document.querySelector('.btn1');
btn1.addEventListener('click', () => {
    in1.disabled = false;
})

//* 177.3

const btn2 = document.querySelector('.btn2');
btn2.addEventListener('click', () => {
    if (in1.disabled === false) {
        in1.value = 'enabled';
    } else {
        in1.value = 'disabled';
    }
})

//* 178.1

const check = document.querySelector('#check');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
btn3.addEventListener('click', () => {
    check.checked = true;
})
btn4.addEventListener('click', () => {
    check.checked = false;
})

//* 178.2
const btn5 = document.querySelector('.btn5');
const p1 = document.querySelector('.p1');
btn5.addEventListener('click', () => {
    if (check.checked) {
        p1.innerHTML = 'привет';
    } else {
        p1.innerHTML = 'пока';
    }
})

//* 179.1
// button.addEventListener('click', function() {
// 	elem.disabled = !elem.disabled;
// });
//* !меняет значение на противоположное если было true становиться false

//* 179.2

const check1 = document.querySelector('#check1');
const btn6 = document.querySelector('.btn6');

btn6.addEventListener('click', () => {
    check1.disabled = !check1.disabled;
})

//* 180.1

const btn7 = document.querySelector('.btn7');
const radios = document.querySelectorAll('input[type="radio"]');
const p2 = document.querySelector('.p2');
btn7.addEventListener('click', () => {
    for (let el of radios) {
        if (el.checked) {
            p2.innerHTML = el.value;
        }
    };

})

//* 181.1

const in2 = document.querySelector('#in2');
const p3 = document.querySelector('.p3');

in2.addEventListener('change', () => {
    p3.innerHTML = in2.value
})

//* 181.2

const check2 = document.querySelector('#check2');
check2.addEventListener('click', () => {
    alert(check2.checked)
});

//* 181.3
//* blur исполняется всегда при потере фокуса, change только при изменинении данных

// * 181.4

const in3 = document.querySelector('#in3');

in3.addEventListener('change', () => {
    in3.value.length >= 5 ? in3.style.borderColor = 'green' : in3.style.borderColor = 'red';
});

//* 182.1

const in4 = document.querySelector('#in4');
in4.addEventListener('input', () => {
    if (in4.value.length === 5) { alert('5') }
});

//* 182.2

const p4 = document.querySelector('.p4');
const in5 = document.querySelector('#in5');
in5.addEventListener('input', () => {
    const a = in5.value.length;
    if (a < 5) {
        p4.innerHTML = `еще можно ввести ${5 - a} символов `
    } else if (a === 5) {
        p4.innerHTML = `введено максимальное количество символов`
    } else {
        p4.innerHTML = `длинна превышенна на ${a - 5} символов `
    }
});

//* 183.1

const in6 = document.querySelector('#in6');
const in7 = document.querySelector('#in7');

in6.addEventListener('input', () => {
    if (in6.value.length === 2) {
        in7.focus();
    }
})
in7.addEventListener('input', () => {
    if (in7.value.length === 2) {
        in7.blur();
    }
})

//* 184.1

const p5 = document.querySelector('.p5');
const select = document.querySelector('#select');
const btn8 = document.querySelector('.btn8');

btn8.addEventListener('click', function () {
    p5.innerHTML = select.value;
});

//* 184.2

const select1 = document.querySelector('#select1');
select1.addEventListener('change', () => {
    select1.value % 4 === 0 && select1.value % 100 !== 0 ?
        alert('високосный') : alert('не високосный')
});

//* 184.3

const select2 = document.querySelector('#select2');
select2.addEventListener('change', () => {
    select2.value > 5 ?
        alert('выходной') : alert('рабочий')
});

//* 185.1

const select3 = document.querySelector('#select3').getElementsByTagName('option');
for (let el of select3) {
    if (Number(el.value) === new Date().getMonth()) el.selected = true;
};

//* 186.1

const in8 = document.querySelector('#in8');
in8.addEventListener('blur', () => {
    select2.selectedIndex = in8.value;
})

//* 186.2

select2.selectedIndex = new Date().getDay() - 1;

//* 187.1
const select4 = document.querySelector('#select4');
for (let el of select4) {
    el.innerHTML += el.value;
};


//* 188.1

for (let el of select4) {
    el.selected ?
        el.innerHTML += '!' :
        el.innerHTML += '?';
};

//* 188.2..
const btn9 = document.querySelector('.btn9');
btn9.addEventListener('click', () => {
    select4[select4.length - 1].selected = true;
});

//* 188.3

const btn10 = document.querySelector('.btn10');
const select5 = document.querySelector('#select5');

btn10.addEventListener('click', () => {
    alert(select5[select5.selectedIndex].innerHTML)
})
const btn11 = document.querySelector('.btn11');

//* 188.4

btn11.addEventListener('click', () => {
    select5[select5.selectedIndex].innerHTML += '!';
})

//* 189.1

let elem = document.querySelector('#elem11');

elem.addEventListener('click', function (e) {
    console.log(e)
});

//* 190.1

const div = document.querySelector('div');
document.addEventListener('mousemove', e => {
    div.innerHTML = `${e.pageX} : ${e.pageY}`;
})

//* 191.1

const bte = document.querySelector('#elem12');

bte.addEventListener('click', func);
bte.addEventListener('dblclick', func);

function func(e) {
    if (e.type === 'click') {
        bte.style.backgroundColor = 'green';
    } else if (e.type === 'dblclick') {
        bte.style.backgroundColor = 'red';
    }
}

//* 192.1

const ul = document.getElementById('elem2122');
ul.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') 
    { e.target.innerHTML +=  '!'; }
    else if (e.target.tagName.toLowerCase() === 'ul') 
    { e.target.innerHTML += '<li>text</li>' };

});
