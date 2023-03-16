function randomInteger(min, max) {
    const random = Math.random() * (max - min) + min;
    return Math.trunc(random);
}