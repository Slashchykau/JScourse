'use strict';




// start();

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt("Сколько фильмов вы уже посмотрели?", '');
        }
    },

    remember: function () {
        let i = 0;
        do {
            const a = prompt('Один из последних просмотренных фильмов?', ''),
                b = prompt('На сколько оцените его?', '');


            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('da');
            } else {
                console.log('error');
                i--;
            }
            i++
        } while (i < 2);
    },
    detectPersinalLevel: function () {
        if (personalMovieDB.count <= 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count > 10 && personalMovieDB.count <= 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");

        } else {
            console.log('error');
        }
    },
    showMyDB: function () {
        if (personalMovieDB.privat == false) {
            return console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        }
        else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function () {
        for (let i = 1; i < 2; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre === '' || genre == null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
            } 
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} ${item}`)
        });
    }

};



// remember();


// detectPersinalLevel();


// showMyDB();




// console.log(writeYourGenres());

// const obj = {
//     main: 'add',
//     foot: 'grow',
//     age: 22,
//     colors: {
//         bg: 'green',
//         main1: 'red'
//     },
//     add: [],
// }

// // console.log(Object.keys(obj).length)

// const { bg, main1 } = obj.colors;
// console.log(main1)


// const arr = [1, 2, 3, 4, 5, 6, 7, 78, 4];

// arr.pop();
// arr.push(11);

// console.log(arr);


