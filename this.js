'use strict';

// THIS --------------------------------------->


function sayHi(surname) {
    console.log(this.name + ' ' + surname);
}

const user = {
    name: 'alexander'
};

sayHi.call(user, 'andreychuk');
sayHi.apply(user, ['andreychuk']);

const fn = sayHi.bind(user);

fn('andreychuk');

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => console.log(this.num);
        /* стрелочная функция не имеет своего контекста, 
        поэтому берет его у родителя - метода sayNumber!!! */

        say();
    }
};

obj.sayNumber();