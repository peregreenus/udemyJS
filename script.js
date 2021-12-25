// // HOMEWORK 1

// /* Задание на урок:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате: 
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };


// const lastFilm = prompt('Один из последних просмотренных фильмов?', 'Название'),
//     filmRaiting = +prompt('На сколько оцените его?', 0),
//     lastFilm2 = prompt('Один из последних просмотренных фильмов?', 'Название'),
//     filmRaiting2 = +prompt('На сколько оцените его?', 0);

// personalMovieDB.movies[lastFilm] = filmRaiting;
// personalMovieDB.movies[lastFilm2] = filmRaiting2;

// console.log(personalMovieDB);


// // HOMEWORK 2

// /* Задание на урок:
// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла
// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять
// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"
// 4) Потренироваться и переписать цикл еще двумя способами*/


// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }

// start();


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,

    start() {
        let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);

        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);
        }
        personalMovieDB.count = numberOfFilms;
    },

    rememberMyFilms() {
        for (let i = 0; i < 2; i++) {
            const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
                filmRaiting = +prompt('На сколько оцените его?', '');

            if (lastFilm !== null && filmRaiting !== null && lastFilm !== '' &&
                filmRaiting !== '' && lastFilm.length < 50) {
                personalMovieDB.movies[lastFilm] = filmRaiting;
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },

    writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre !== null && genre !== '' && isNaN(+genre)) {
                personalMovieDB.genres.push(genre);
            } else {
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, index) => console.log(`Любимый жанр #${index + 1} - это ${item}`));
    },

    toggleVisibleMyDB() {
        personalMovieDB.privat = !personalMovieDB.privat;
    },

    showMyDB() {
        if (!personalMovieDB.privat) {
            console.log(personalMovieDB);
        }
    }
};
//console.log(personalMovieDB.toggleVisibleMyDB());

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();

// loop 1 -------------------------------------------------------------------------

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//             filmRaiting = +prompt('На сколько оцените его?', '');

//         if (lastFilm !== null && filmRaiting !== null && lastFilm !== '' && filmRaiting !== '' && lastFilm.length < 50) {
//             personalMovieDB.movies[lastFilm] = filmRaiting;
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }

// rememberMyFilms();

// // loop 2 -------------------------------------------------------------------------

// // let i = 0;
// // do {
// //     const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
// //           filmRaiting = +prompt('На сколько оцените его?', '');
// //     i++;

// //     if (lastFilm !== null && filmRaiting !== null && lastFilm !== '' && filmRaiting !== '' && lastFilm.length < 50) {
// //                 personalMovieDB.movies[lastFilm] = filmRaiting;
// //             } else {
// //                 console.log('error');
// //                 i--;
// //             }
// // } while (i < 2);

// // loop 3 -------------------------------------------------------------------------

// // let i = 0;
// // while (i < 2) {
// //     const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
// //           filmRaiting = +prompt('На сколько оцените его?', '');
// //     i++;

// //     if (lastFilm !== null && filmRaiting !== null && lastFilm !== '' && filmRaiting !== '' && lastFilm.length < 50) {
// //                 personalMovieDB.movies[lastFilm] = filmRaiting;
// //             } else {
// //                 console.log('error');
// //                 i--;
// //     }
// // }

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }

// detectPersonalLevel();


// HOMEWORK 3

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/


// Код возьмите из предыдущего домашнего задания

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {

//         let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres.push(genre);
//     }
// }

// writeYourGenres();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }
// }

// showMyDB(personalMovieDB.privat);

// Homework 4

/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/