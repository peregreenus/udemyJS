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