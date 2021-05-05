'use strict';

//* 193.1

const in1 = document.querySelector('#in1');
const p1 = document.querySelector('.p1');

in1.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        p1.innerHTML += in1.value;
        in1.value = '';
    }
})

//* 194.1

const div1 = document.querySelector('.div1');
div1.addEventListener('click', (e) => {
    if (e.altKey) {
        div1.classList.toggle('ColRed');
    }

})

//* 194.2

const el = document.querySelector('#elem');
el.addEventListener('click', (e) => {
    if (e.altKey && e.target.tagName.toLowerCase() === 'li') {
        e.target.innerHTML += '1';
    } else if (e.shiftKey && e.target.tagName.toLowerCase() === 'li') {
        e.target.innerHTML += '2';
    }
})

//* 195.1

document.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'a') {
        e.preventDefault();
        e.target.innerHTML += '(' + e.target.href + ')';
    }

})

//* 195.2

const in2 = document.querySelector('#in2');
const in3 = document.querySelector('#in3');
const p2 = document.querySelector('.p2');
const a = document.querySelector('.a');
a.addEventListener('click', (e) => {
    e.preventDefault();
    p2.innerHTML = in2.value + in3.value;
})

//* 198.1
//* в первом случае elem.value в втором undefined т.к произошла потеря контекстa

//* 199.1

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
//     alert(square());
//     const self = this;
//     function square() {
//         return self * self;
//     }
// }
//* был потерян контекст; исправил добовлением this в переменную во внешней функции;

//* 199.2
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
//     alert(square(this));
//     function square() {
//         return param * param;
//     }
// }
//* исправил передачей контекста(this) в аргумент функции;

//* 199.3

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
//     alert(square(this));
//     const square = () => {
//         return this.value * this.value;
//     }
// }
//* исправил доболвение стрелочной функции т.к у нее нет контекста вызова и она берет его у родителя в котором была вызванна;

//* 200.1

function func() {
    console.log(this.value);
}
const el1 = document.querySelector('#elem1');
const el2 = document.querySelectorAll('#elem2');
func.call(el1);
func.call(el2[0]);
func.call(el2[1]);

//* 200.2

const el4 = document.querySelector('#elem4');

function func1(surname, name) {
    console.log(this.value + ', ' + surname + ' ' + name);
}

func1.call(el4, 'Иван', 'Иванов');

//* 201.1

func1.apply(el4, ['Иван', 'Иванов']);

//* 202.1

const newFunc = func1.bind(el4);

newFunc('Иванов', 'Иван'); // тут должно вывести 'привет, Иванов Иван'
newFunc('Петров', 'Петр');

//* 203.1

// setInterval(function () {
//     console.log('fff');
// }, 3000);

//* 204.1

let a1 = 100;
// setInterval(() => console.log(a1--),1000);


//* 205.1

let a2 = 10;
// const timer1 = setInterval(() => {
//     if (a2 > 1) {
//         console.log(a2--);
//     } else { console.log(a2); clearInterval(timer1) }
// }, 1000)

//* 206.1

const btn = document.querySelector('.btn');
// btn.addEventListener('click', () => {
//     let a1 = 100;
//     setInterval(() => console.log(a1--),1000);
// })

//* 206.2

function f() {
    let a1 = 100;
    setInterval(() => console.log(a1--), 1000);
    this.removeEventListener('click', f);
}
btn.addEventListener('click', f)

//* 207.1

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
let timerID;
btn1.addEventListener('click', () => {
    let a1 = 100;
    timerID = setInterval(() => {
        if (a1 > 0) {
            console.log(a1--);
        } else { clearInterval(timerID) }
    }, 1000)
});
btn2.addEventListener('click', () => {
    clearInterval(timerID);
});

//* 207.2

const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
let timerId;
// btn3.addEventListener('click', function() {
// 	 timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });

// btn4.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

//*  207.3
//* let timerId; let timerId = setInterval дважды обьявил

//* 207.4
//* setInterval не была присвоена в переменную timerId

//* 207.5
//* clearInterval(); не была переданна переменная timerId; 

//* 207.6

function f3() {
    timerId = setInterval(function () {
        let date = new Date;
        console.log(date.getMinutes() + ' ' + date.getSeconds());
    }, 1000);
    this.removeEventListener('click', f3)
}
btn3.addEventListener('click', f3);

btn4.addEventListener('click', function () {
    clearInterval(timerId);
    btn3.addEventListener('click', f3);
});

//* 208.1
//* input.value = string если не писать Number() получится конкотенация и строка '12345';

//* 208.2

const el5 = document.querySelector('#elem5');

// el5.addEventListener('focus', () => {
//     setInterval(() => el5.value--, 1000)
// })

//* 208.3

el5.addEventListener('focus', () => {
    let a = setInterval(() => {
        if (el5.value == 0) {
            clearInterval(a);
        } else { el5.value-- }
    }, 1000)
});


//* 209.1

const btn5 = document.querySelector('.btn5');
// btn5.addEventListener('click', function() {
//    let self = this;
// 	setInterval(function() {
// 	self.innerHTML = Number(btn5.innerHTML)+ 1;
// 	}, 1000);
// });

//* произошла потеря контекста, он пытался вызвать this у вложенной функции а унее this будет равнятся window;

//* 209.2

btn5.addEventListener('click', function () {
    setInterval(() => {
        this.innerHTML = Number(btn5.innerHTML) + 1;
    }, 1000);
});

 //* 209.3

//  elem.addEventListener('click', function() {
// 	function func(self) { //* у функции func появилась переменная slef
// 		return function() {
// 			console.log(self.value); 
// 		}
// 	}

// 	setInterval(func(this), 1000); //* передаем this в функцию
// });

// elem.addEventListener('click', function() {
// 	setInterval((function(self) { //* у функции func появилась переменная slef
// 		return function() {
// 			console.log(self.value);
// 		}
// 	})(this), 1000); //* функция самовызывается с значанием this
// });

//* 210.1

// elem.addEventListener('click', function() {
// 	setInterval(function(self) {
// 		self.value--;
// 	}, 1000,this);
// });



