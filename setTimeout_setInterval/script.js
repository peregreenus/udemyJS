// РЕКУРСИВНЫЙ setTimeout

// let id = setTimeout(function log() {
//     console.log('hello');
//     id = setTimeout(log, 2000);
// }, 2000);

// clearInterval(id);


const btn = document.querySelector('.btn');
let timerId;
let i = 0;

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 2000);
// });


// const logger = () => {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('Hello');
//     i++;
// };

// animation

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const interval = setInterval(frame, 10);

    function frame() {
        if (pos === (elem.parentNode.clientWidth - elem.clientWidth)) {
            clearInterval(interval);
        } else {
            pos++;
            elem.style.transform = `translate(${pos}px, ${pos}px)`;
        }
    }
}

btn.addEventListener('click', myAnimation);

// Date ----------------------------------------------------------------

let now = new Date();

console.log(now.toString()); // текущая дата и время
console.log(now.getFullYear()); // год
console.log(now.getDate()); // число

console.log(now.getTime()); // разница между часовыми поясами

let start = new Date();

for (let i = 0; i < 100000; i++) {
    let some = i ** 3;
}

let end = new Date();
console.log(`Time: ${end - start}ms`);


function getDateAgo(date, days) {
    let dateCopy = new Date(date);

    dateCopy.setDate(date.getDate() - days);
    return dateCopy;
}


let date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1));


// Last Day of Month

function getLastDayOfMonth(year, month) {
    let date = new Date(year, ++month, 0).getDate();
    return date;
}

console.log(getLastDayOfMonth(2012, 0));

// ----------------------------------------

// function getSecondsToday() {
//     let date = new Date();
//     let secInHours = date.getHours() * 3600;
//     let secInMinutes = date.getMinutes() * 60;
//     let currentSec = date.getSeconds();

//     return secInHours + secInMinutes + currentSec;
// }

function getSecondsToday() {
    let now = new Date();
    let begin = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    return Math.round((now - begin) / 1000);
}

console.log(getSecondsToday());


function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    return Math.round((tomorrow - now) / 1000);
}

getSecondsToTomorrow();