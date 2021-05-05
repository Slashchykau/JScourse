'use strict'

//*140.1
const checkDate = (year, month, day) => {
	let date = new Date(year, month, day);

	if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
		return true;
	} else {
		return false;
	}
}
console.log(checkDate(2025, 0, 31)); // выведет true
console.log(checkDate(2025, 0, 32)); // выведет false

//* 141.1 

const date = new Date(new Date().getFullYear(), 11, 31).getDay();
console.log(date)

//* 141.2

const date2 = new Date(new Date().getFullYear(), new Date().getMonth(), 1).getDay();
console.log(date2)

//* 141.3

const date2 = new Date(new Date().getFullYear() + 1, 11, 31).getDay();
console.log(date2)

//* 141.4

const date = new Date(new Date().getFullYear() + 1, new Date().getMonth(), new Date().getDate()).getDay();
console.log(date)

//* 141.5

const date = new Date(new Date().getFullYear() - 1, new Date().getMonth(), new Date().getDate()).getDay();
console.log(date)

//* 141.6

//* не буде покаже предыдущий месяц 11;

//* 141.7

const date = new Date(new Date().getFullYear(), new Date().getMonth() - 1, new Date().getDate()).getDay();
console.log(date)

//* 141.8

const day1 = new Date(new Date().getFullYear(), 9, 10) / (1000 * 60 * 60 * 24);
const day2 = new Date(new Date().getFullYear(), 0, 1) / (1000 * 60 * 60 * 24);
console.log(day1 - day2);

//* 141.9

const day1 = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 10) / (1000 * 60 * 60 * 24);
const day2 = new Date(new Date().getFullYear(), new Date().getMonth(), 20) / (1000 * 60 * 60 * 24);
console.log(day1 - day2);

//* 141.10

const day1 = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate() + 1, 12) / (1000 * 60 * 60);
const day2 = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 12) / (1000 * 60 * 60);
console.log(day1 - day2);


//* 141.11

const liveTime = new Date() / (1000 * 60 * 60);
const startTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()) / (1000 * 60 * 60);
console.log(Math.floor(liveTime - startTime))

//* 141.12

const liveTime = new Date() / (1000 * 60 * 60);
const finishTime = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate(), 24) / (1000 * 60 * 60);
console.log(Math.floor(finishTime - liveTime))

//* 141.13

let now = new Date();
let year = now.getFullYear();

for (let lastYear = 2000; lastYear <= year; lastYear++) {
	let date = new Date(lastYear, 0, 1);

	if (date.getDay() == 0) {
		console.log(lastYear + '-' + 0 + '-1');
	}
};

//* 142.1

const liveTime = new Date();
const startTime = new Date(liveTime.getFullYear(), liveTime.getMonth(), liveTime.getDate(), 0)
const result = Math.floor((liveTime - startTime) / 1000);
console.log(result)

//* 142.2
const liveTime = new Date();
const endTime = new Date(liveTime.getFullYear(), liveTime.getMonth(), liveTime.getDate(), 24)
const result = Math.floor((endTime - liveTime) / 1000);
console.log(result)

//* 142.3

const liveTime = new Date();
const newYear = new Date(liveTime.getFullYear(), 11, 31, 24)
const result = Math.floor((newYear - liveTime) / (1000 * 60 * 60 * 24));
console.log(result)

//* 142.4

const year = new Date().getFullYear();

for (let month = 0, k = 0; month <= 11; month++) {

	let date = new Date(year, month, 13);
	if (date.getDay() === 5) {
		k++;
	} else if (month === 11) {
		console.log(`В текущем году ${k} пятница 13`);
	}
}

//* 142.5

const date = new Date();
const backDate = new Date(date.getFullYear(), date.getMonth() - 3).getFullYear()
console.log(backDate)

//* 142.6

const date = new Date(new Date().getFullYear(), 11, 31).getDay();
console.log(date)

//* 142.8

const date = new Date().getFullYear();
date % 4 === 0 && date % 100 !== 0 ?
	console.log('високосный') :
	console.log('не високосный');

//* 142.9
const ves = () => {
	let date = new Date().getFullYear();
	for (let i = 1; i <= 4; i++) {
		let lastDate = date - i;
		if (lastDate % 4 === 0 && lastDate % 100 !== 0) {
			return console.log(`последний високосный год ${lastDate}`)
		}
	}
}
ves();

//* 142.10
const nextVes = () => {
	let date = new Date().getFullYear();
	for (let i = 1; i <= 4; i++) {
		let lastDate = date + i;
		if (lastDate % 4 === 0 && lastDate % 100 !== 0) {
			return console.log(`следующий високосный год ${lastDate}`)
		}
	}
}
nextVes();

//* 143.1

let date1 = '2020-11-31';
let date2 = '2020-12-01';
date1 > date2 ? console.log(date1) : console.log(date2)

//* 143.2

let date1 = '09-21';
let date2 = '09-23';
date1 > date2 ? console.log(date1) : console.log(date2)

//* 143.3
function zodiac(date) {
	if (date >= '02-21' && date <= '03-19') {
		console.log('овен');
	} else

		if (date >= '03-20' && date <= '04-20') {
			console.log('телец');
		} else

			if (date >= '04-21' && date <= '05-21') {
				console.log('близнецы');
			} else

				if (date >= '05-22' && date <= '06-22') {
					console.log('рак');
				} else

					if (date >= '06-23' && date <= '07-22') {
						console.log('лев');
					} else

						if (date >= '07-23' && date <= '08-22') {
							console.log('дева');
						} else

							if (date >= '08-23' && date <= '09-23') {
								console.log('весы');
							} else

								if (date >= '09-24' && date <= '10-22') {
									console.log('скорпион');
								} else

									if (date >= '10-23' && date <= '11-21') {
										console.log('стрелц');
									} else

										if (date >= '11-22' && date <= '00-20') {
											console.log('козерог');
										} else

											if (date >= '00-21' && date <= '01-18') {
												console.log('водолей');
											} else
												if (date >= '01-19' && date <= '02-20') {
													console.log('рыбы');
												}
}
zodiac('06-25')

//* 144.1

const date = new Date();
const midDay = new Date(date.getFullYear(), date.getMonth(), date.getDate(), 12);
console.log(midDay > date ? 'не наступил' : 'прошел')

//* 144.2

const date = new Date();
const date15 = new Date(date.getFullYear(), date.getMonth(), 15)
console.log(date15 > date ? 'не наступил' : 'прошел');

//* 145.1
let now = new Date();
let date = new Date(now.getFullYear(), 2, 8);

let diff = date - now;

if (diff > 0) {
	console.log(Math.floor(diff = diff / (1000 * 60 * 60 * 24)))
} else if (diff == 0) {
	console.log('tday holiday')
} else {
	date = new Date(now.getFullYear() + 1, 2, 8);
	diff = (date - now) / (1000 * 60 * 60 * 24);
	console.log(Math.floor(diff))
}

//* 145.2

const date = new Date();

function howDay(date) {
	let happyBirth = new Date(date.getFullYear(), 2, 1);
	let diff = (happyBirth - date) / (1000 * 60 * 60 * 24);
	if (diff > 0) {
		return console.log(diff);
	} else {
		happyBirth = new Date(date.getFullYear() + 1, 2, 1);
		diff = (happyBirth - date) / (1000 * 60 * 60 * 24);
		return console.log(Math.floor(diff));
	}
}
howDay(date);

//* 145.3

function howDay(monts, day) {
	const date = new Date();
	if (monts === 1 && day === 29) {
		monts = 2; day = 1;
	}
	let happyBirth = new Date(date.getFullYear(), monts, day);
	let diff = (happyBirth - date) / (1000 * 60 * 60 * 24);

	if (diff > 0) {
		return console.log(diff);
	} else {
		happyBirth = new Date(date.getFullYear() + 1, monts, day, 1);
		diff = (happyBirth - date) / (1000 * 60 * 60 * 24);
		return console.log(Math.floor(diff));
	}

}
howDay(1, 29);


