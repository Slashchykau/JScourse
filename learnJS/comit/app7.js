'use strict'

//* 154.1

const p1 = document.querySelector('.p1');
const p2 = document.querySelector('.p2');
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => alert(Number(p1.innerHTML) + Number(p2.innerHTML)));

//* 154.2

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
btn1.addEventListener('click', () => alert(p1.innerHTML));
btn2.addEventListener('click', () => alert(p2.innerHTML));

//* 154.3
const p3 = document.querySelector('.p3');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
btn3.addEventListener('click', () => p3.innerHTML = 'привет');
btn4.addEventListener('click', () => p3.innerHTML = 'пока');

//* 154.4

const p4 = document.querySelector('.p4');
const p5 = document.querySelector('.p5');
const p6 = document.querySelector('.p6');

p4.addEventListener('click', () => p4.innerHTML = '1')
p5.addEventListener('click', () => p5.innerHTML = '2')
p6.addEventListener('click', () => p6.innerHTML = '3')

//* 154.5

const p7 = document.querySelector('.p7');
p7.addEventListener('click', () => {
    let a = Number(p7.innerHTML)
    p7.innerHTML == a * a;
})

//*  154.6

const p8 = document.querySelector('.p8');
p8.addEventListener('click', () => {
    let a = Number(p8.innerHTML)
    p8.innerHTML = a + 1;

});

//* 154.7

const p9 = document.querySelector('.p9');
p9.addEventListener('click', () => {
    let a = p9.innerHTML;
    p9.innerHTML = a + '!';
})

//* 154.8
const p10 = document.querySelector('.p10');
p10.addEventListener('click', () => {
    let a = p10.innerHTML;
    p10.innerHTML = '!' + a;
})

//* 154.9

const p11 = document.querySelector('.p11');
const btn11 = document.querySelector('.btn11');

btn11.addEventListener('click', () => {
    p11.innerHTML = '<i>hello</i>';

})

//* 154.10

const p12 = document.querySelector('.p12');
const btn12 = document.querySelector('.btn12');
btn12.addEventListener('click', () => {
    let a = alert(p12.innerHTML);
    p12.InnerHtml = `<b> ${a}</b>`
})


// *155.1

const inp = document.querySelector('#elem');
const btn13 = document.querySelector('.btn13');
btn13.addEventListener('click', () => alert(inp.type))

//* 155.2

const btn14 = document.querySelector('.btn14');
btn14.addEventListener('click', () => alert(inp.type = 'submit'));

//* 155.3

const a = document.querySelector('.link');
const btn15 = document.querySelector('.btn15');
const p14 = document.querySelector('.p14');
btn15.addEventListener('click', () => p14.innerHTML = a.href);

//* 155.4

const a1 = document.querySelector('.link1');
const btn16 = document.querySelector('.btn16');
btn16.addEventListener('click', () => a1.innerHTML = a1.innerHTML + "(" + a1.href + ")")


//* 155.5 

const p15 = document.querySelector('.p15');
const btn17 = document.querySelector('.btn17');
const img = document.querySelector('.img');
btn17.addEventListener('click', () => p15.innerHTML = img.src)

//* 155.6

const btn18 = document.querySelector('.btn18');
btn18.addEventListener('click', () => img.style.width = '300px')

//* 155.7

const btn19 = document.querySelector('.btn19');
img.style.width = '400px';
btn19.addEventListener('click', () => { img.style.width = '500px' });

//* 155.8

const img2 = document.querySelector('.img2');
const btn20 = document.querySelector('.btn20');
const btn21 = document.querySelector('.btn21');
btn20.addEventListener('click', () => img2.src = "https://static.mvideo.ru/media/Promotions/Promo_Page/2021/April/PersonalPrice/stories_L_312x456.png")
btn21.addEventListener('click', () => img2.src = "https://static.mvideo.ru/media/Promotions/Promo_Page/2021/February/mobileapp/stories_L_312x456.png")


//* 156.1

const inp1 = document.querySelector('#elem1').value;
const btn22 = document.querySelector('.btn22');
btn22.addEventListener('click', () => alert(inp1))

//* 156.2

const inp2 = document.querySelector('#elem2');
const btn23 = document.querySelector('.btn23');
btn23.addEventListener('click', () => inp2.value = 'haha')

//* 156.3

const inp3 = document.querySelector('#elem3');
const p16 = document.querySelector('.p16');
const btn24 = document.querySelector('.btn24');
btn24.addEventListener('click', () => p16.innerHTML = inp3.value);

//* 156.4

const inp4 = document.querySelector('#elem4');
const inp5 = document.querySelector('#elem5');
const btn25 = document.querySelector('.btn25');
btn25.addEventListener('click', () => inp5.value = inp4.value * inp4.value);

//* 156.5

const inp6 = document.querySelector('#elem6');
const inp7 = document.querySelector('#elem7');
const btn26 = document.querySelector('.btn26');
btn26.addEventListener('click', () => {
    const a = inp6.value; const b = inp7.value; inp6.value = b; inp7.value = a;
});

//* 156.7

const inp8 = document.querySelector('#elem8');
const inp9 = document.querySelector('#elem9');
const inp10 = document.querySelector('#elem10');
const inp11 = document.querySelector('#elem11');
const inp12 = document.querySelector('#elem12');
const p20 = document.querySelector('.p20');
const btn27 = document.querySelector('.btn27');
btn27.addEventListener('click', () => p20.innerHTML = (Number(inp8.value) + Number(inp9.value) + Number(inp10.value) + Number(inp11.value) + Number(inp12.value)) / 5);

//* 157.1

const inp13 = document.querySelector('#elem13');

inp13.addEventListener('focus', () => inp13.value = 1);
inp13.addEventListener('blur', () => inp13.value = 2);

//* 157.2

const inp14 = document.querySelector('#elem14');
inp14.addEventListener('blur', () => inp14.value = inp14.value * inp14.value);

//* 157.3

const inp15 = document.querySelector('#elem15');
inp15.addEventListener('blur', () => inp15.value = '');

//* 158.1

const div = document.querySelector('#elem16');
const btn28 = document.querySelector('.btn28')
btn28.addEventListener('blur', () => alert(div.className));

//* 158.2

const div1 = document.querySelector('#elem17');
const btn29 = document.querySelector('.btn29');
btn29.addEventListener('click', () => {
    div1.className = 'abb';
    alert(div1.className)
});

//* 158.3

const div2 = document.querySelector('#elem18');
const btn30 = document.querySelector('.btn30');
btn30.addEventListener('click', () => alert(div2.className.split(' ')))

//* 159.1

console.log(document.querySelector('#image').src);

//* 159.2

const image = document.querySelector('#image');
console.log(image.src, image.width, image.height);
//* чем больше раз js ищет элемены тем медленне загрузка; и больше кода;

//* 160.1

const inp19 = document.querySelector('#elem19');
inp19.addEventListener('blur', function () { this.value = 2 });
inp19.addEventListener('focus', function () { this.value = 1 });

//* 160.2

const btn31 = document.querySelector('.btn31');

btn31.addEventListener('click', function () { this.innerHTML = Number(this.innerHTML) + 1 });

//*160.3

function add() {
    this.innerHTML = this.innerHTML + '!';
}
const p21 = document.querySelector('.p21');
const p22 = document.querySelector('.p22');
const p23 = document.querySelector('.p23');
const p24 = document.querySelector('.p24');
const p25 = document.querySelector('.p25');
p21.addEventListener('click', add)
p22.addEventListener('click', add)
p23.addEventListener('click', add)
p24.addEventListener('click', add)
p25.addEventListener('click', add)

//* 160.4

function sqare() {
    this.value = this.value * this.value;
};

const inp20 = document.querySelector('#elem20');
const inp21 = document.querySelector('#elem21');
const inp22 = document.querySelector('#elem22');

inp20.addEventListener('blur', sqare);
inp21.addEventListener('blur', sqare);
inp22.addEventListener('blur', sqare);

//* 161.1

const btn32 = document.querySelector('.btn32');

btn32.addEventListener('click', function () {
    const p26 = document.querySelectorAll('.p26')
    for (let el of p26) {
        el.innerHTML = 'text';
    };
});

//* 161.2

const btn33 = document.querySelector('.btn33');
btn33.addEventListener('click', function () {
    const p27 = document.querySelectorAll('.p27')
    for (let i = 0; i < p27.length; i++) {
        p27[i].innerHTML = p27[i].innerHTML + `${i}`;
    }
});

//* 161.3

const btn34 = document.querySelector('.btn34');
const inp23 = document.querySelectorAll('#elem23');
const p28 = document.querySelector('.p28');

btn34.addEventListener('click', () => {
    let sum = 0;
    for (let el of inp23) {
        sum += Number(el.value);
    };
    p28.innerHTML = sum;
});

//* 162.1
function func() {
    this.value = Number(this.value) + 1;
}
const inp24 = document.querySelectorAll('#elem24');
for (let el of inp24) {
    el.addEventListener('blur', func);
}

//* 162.2

const p29 = document.querySelectorAll('.p29');
function f1() { this.innerHTML = Number(this.innerHTML) * Number(this.innerHTML); }
for (let el of p29) {
    el.addEventListener('click', f1);
};

//* 162.3

let divs = document.querySelectorAll('div');

for (let div of divs) {
    div.addEventListener('click', function () { this.innerHTML++ }
    );
};

//* 163.1

const a5 = document.querySelector('.a5');
function f1() {
    this.innerHTML = this.innerHTML + '(' + this.href + ')';
    a5.removeEventListener('click', f1)
};
a5.addEventListener('click', f1);

//* 163.2

const btn35 = document.querySelector('.btn35');
function f3() {
    if (this.innerHTML < 10) { this.innerHTML++; } else { this.removeEventListener('click', f3) }
};
btn35.addEventListener('click', f3)

//* 164.1
const p30 = document.querySelectorAll('.p30');
function f4() {
    this.innerHTML += '!'; this.removeEventListener('click', f4)
}

for (let el of p30) {
    el.addEventListener('click', f4)
}

//* 166.2

const inp26 = document.querySelector('#elem26');
console.log(inp26.getAttribute('value'))

//* 166.3
const inp27 = document.querySelector('#elem27');
inp27.setAttribute('value', 'text')

//* 166.4

inp27.getAttribute('class', 'valid');

//* 166.5

const inp28 = document.querySelector('#elem28');
inp28.removeAttribute('value');

//* 166.6

console.log(inp28.hasAttribute('value'));

//* 167.1

const inp29 = document.querySelector('#elem29');
const btn36 = document.querySelector('.btn36');
const e = inp29.getAttribute('value');
btn36.addEventListener('click', () => {
    if (e == inp29.value) {
        console.log('good')
    } else console.log('bad')
});
//* 167.2

const btn37 = document.querySelector('.btn37');
btn37.addEventListener('click', () => {
    inp29.value = e;

});

//* 168.1

const inp30 = document.querySelector('#elem30');
console.log(inp30.classList.length)

//* 168.2

const classArr = inp30.classList;
for (let el of classArr) {
    console.log(el)
}

//* 168.3

inp30.classList.add('xxx')

//* 168.4

inp30.classList.remove('www', 'zzz')

//* 168.5

inp30.classList.contains('ggg')

//* 168.6

inp30.classList.toggle('www')

