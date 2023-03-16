// Создать новый объект с помощью уже существующего

// это работает
function Rabbit(name) {
    this.name = name;
}

let rabbit = new Rabbit("White Rabbit");
let rabbit2 = new rabbit.constructor("Black Rabbit");

// это нет
function RabbitBroken(name) {
    this.name = name;
}

RabbitBroken.prototype = {};

let rabbitBroken = new RabbitBroken("White Rabbit");
let rabbitBroken2 = new rabbitBroken.constructor("Black Rabbit");