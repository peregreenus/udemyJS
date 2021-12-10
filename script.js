let number = 123456789;
let i = 0;
while (i < number) {
    let d = number % 10;
    number = parseInt(number / 10);
    console.log(d);
    i++;
}

let a;
