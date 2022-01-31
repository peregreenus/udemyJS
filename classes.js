class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    mult() {
        console.log(this.width * this.height);
    }
}

const rect = new Rectangle(30, 20);

class Rectangle2 extends Rectangle { // наследование
    constructor(width, height, side) {
        super(width, height);
        this.side = 4;
    }

    static sum() {
        console.log(this.width + this.height);
    }
}

const rect2 = new Rectangle2(100, 100);
console.log(rect2.Rectangle2.sum());

console.log(rect2.__proto__);
console.log(rect2.prototype);

// Пример работы super с помощью свойства [[HomeObject]]

let animal = {
    name: "Животное",
    eat() {         // animal.eat.[[HomeObject]] == animal
        console.log(`${this.name} ест.`);
    }
};

let rabbit = {
    __proto__: animal,
    name: "Кролик",
    eat() {         // rabbit.eat.[[HomeObject]] == rabbit
        super.eat();
    }
};

let longEar = {
    __proto__: rabbit,
    name: "Длинноух",
    eat() {         // longEar.eat.[[HomeObject]] == longEar
        super.eat();
    }
};

// работает верно
longEar.eat();

console.log((0).__proto__ === Number.prototype); // св-во __proto__ ссылается на прототип типа данных


class A {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    console() {
        console.log(this.a + this.b);
    }
}

class B extends A {
    constructor(a, b) {
        super(a, b);
    }

}

const c = new B(11, 13);

console.log(c.__proto__.__proto__);