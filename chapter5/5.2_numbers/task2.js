function readNumber() {
    let num;

    do {
        num = prompt('Введите число');
    } while (isNaN(num));

    if (!num) {
        return null;
    } else {
        return +num;
    }
}