function camelize(str) {
    const arr = str.split('-');
    const camelizeArr = arr.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1));
    const result = camelizeArr.join('');

    return result;
}