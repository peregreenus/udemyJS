"use strict";

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


// HOMEWORK 3

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

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

// const personalMovieDB = {
//     count: 0,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: true,

//     start() {
//         let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);

//         while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//             numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', 0);
//         }
//         personalMovieDB.count = numberOfFilms;
//     },

//     rememberMyFilms() {
//         for (let i = 0; i < 2; i++) {
//             const lastFilm = prompt('Один из последних просмотренных фильмов?', ''),
//                 filmRaiting = +prompt('На сколько оцените его?', '');

//             if (lastFilm !== null && filmRaiting !== null && lastFilm !== '' &&
//                 filmRaiting !== '' && lastFilm.length < 50) {
//                 personalMovieDB.movies[lastFilm] = filmRaiting;
//             } else {
//                 console.log('error');
//                 i--;
//             }
//         }
//     },

//     detectPersonalLevel() {
//         if (personalMovieDB.count < 10) {
//             console.log('Просмотрено довольно мало фильмов');
//         } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//             console.log('Вы классический зритель');
//         } else if (personalMovieDB.count >= 30) {
//             console.log('Вы киноман');
//         } else {
//             console.log('Произошла ошибка');
//         }
//     },

//     writeYourGenres() {
//         for (let i = 1; i <= 3; i++) {
//             let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//             if (genre !== null && genre !== '' && isNaN(+genre)) {
//                 personalMovieDB.genres.push(genre);
//             } else {
//                 i--;
//             }
//         }
//         personalMovieDB.genres.forEach((item, index) => console.log(`Любимый жанр #${index + 1} - это ${item}`));
//     },

//     toggleVisibleMyDB() {
//         personalMovieDB.privat = !personalMovieDB.privat;
//     },

//     showMyDB() {
//         if (!personalMovieDB.privat) {
//             console.log(personalMovieDB);
//         }
//     }
// };


//-----------------use strict--------------------------DOM----------------------------------------------------------->

// const box = document.getElementById('box'),
//     btns = document.getElementsByTagName('button'),
//     circles = document.getElementsByClassName('circle'),
//     hearts = document.querySelectorAll('.heart'),
//     oneHeart = document.querySelector('.heart'),
//     wrapper = document.querySelector('.wrapper');

// box.style.backgroundColor = 'green';
// box.style.width = '400px';
// btns[1].style.borderRadius = '100%';
// circles[0].style.backgroundColor = 'red';

// const div = document.createElement('div');
// div.classList.add('black');
// wrapper.append(div);

// div.innerHTML = '<h1>hello world</h1>';


//*************************************************************** */

// Homework 5

/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту

5) Добавить нумерацию выведенных фильмов */

// 'use strict';

// Homework 6
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const commercial = document.querySelectorAll('.promo__adv > img');
const promoGenre = document.querySelector('.promo__genre');
const bg = document.querySelector('.promo__bg');

const filmListItems = document.querySelector('.promo__interactive-list');
const btn = document.querySelector('button');
const checkbox = document.querySelector('[type="checkbox"]');
const input = document.querySelector('.adding__input');

commercial.forEach(item => item.remove()); // 1 exersise
promoGenre.textContent = 'ДРАМА'; // 2 exersise
bg.style.background = 'url(../img/bg.jpg)'; // 3 exersise
filmListItems.innerHTML = '';
movieDB.movies.sort();

//CHECKBOX check

// checkbox.addEventListener('change', () => {
//     if (checkbox.checked) {
//         console.log('Добавляем любимый фильм');
//     }
// });

// DELETE ITEMS

function deleteFilm() {
    const deleteItemBtns = document.querySelectorAll('.delete');

    deleteItemBtns.forEach((item, i) => {
        item.addEventListener('click', () => {
            movieDB.movies.splice(i, 1);
            makeFilmList();
        });
    });
}

// START RENDER WITH NEW INPUT.VALUE

btn.addEventListener('click', (e) => {
    e.preventDefault();
    filmListItems.innerHTML = '';
    makeFilmList();
    input.value = '';
});


function makeFilmList() {
    filmListItems.innerHTML = '';
    if (input.value) {
        if (input.value.length > 21) {
            input.value = input.value.slice(0, 21) + '...';
        }

        if (checkbox.checked) {
            console.log('Добавляем любимый фильм');
            checkbox.checked = false;
        }

        movieDB.movies.push(input.value);
        movieDB.movies.sort();
    }

    movieDB.movies.forEach((film, i) => {
        filmListItems.insertAdjacentHTML('beforeend', `
            <li class="promo__interactive-item">
                ${i + 1}. ${film}
                <div class="delete"></div>
            </li>
        `
        );
    });
    deleteFilm();
}

makeFilmList();