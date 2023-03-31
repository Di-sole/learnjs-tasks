// Псевдослучайный генератор
// Cоздать функцию-генератор, которая получает seed и создаёт генератор с указанной формулой

function* pseudoRandom(seed) {
    let value = seed;

    while(true) {
        value = value * 16807 % 2147483647
        yield value;
    }
}