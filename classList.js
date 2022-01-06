const btns = document.querySelectorAll('button');
const wrapper = document.querySelector('#first');

// console.log(btns[0].classList.length);
console.log(btns[1].classList.add('red'));
console.log(btns[0].classList.remove('blue'));
console.log(btns[0].classList.toggle('blue'));

wrapper.addEventListener('click', (e) => {
    if (e.target.matches('button')) {
        console.log('Hello');
    }
});