// 'use strict';

// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", '');
//     }
// }

// // start();

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// function remember() {
//     let i = 0;
//     do {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//             b = prompt('На сколько оцените его?', '');


//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('da');
//         } else {
//             console.log('error');
//             i--;
//         }
//         i++
//     } while (i < 2);
// }
// // remember();

// function detectPersinalLevel() {
//     if (personalMovieDB.count <= 10) {
//         console.log("Просмотрено довольно мало фильмов");
//     } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
//         console.log("Вы классический зритель");
//     } else if (personalMovieDB.count > 30) {
//         console.log("Вы киноман");

//     } else {
//         console.log('error');
//     };
// };
// // detectPersinalLevel();

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         return console.log(personalMovieDB);
//     }
// }
// // showMyDB();


// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         let answer = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = answer;
//     }

// }

// console.log(writeYourGenres());

const obj = {
    main: 'add',
    foot: 'grow',
    age: 22,
    colors: {
        bg: 'green',
        main1: 'red'
    },
    add: [],
}

// console.log(Object.keys(obj).length)

const { bg, main1 } = obj.colors;
console.log(main1)


const arr = [1, 2, 3, 4, 5, 6, 7, 78, 4];

arr.pop();
arr.push(11);

console.log(arr);


