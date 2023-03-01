function sumInput() {
    const numbers = [];

    while (true) {
        let num = prompt('Введите число');
        if (num === '' || num === null) break;
        numbers.push(+num);
      }

    let sum = 0;
    
    for (let num of numbers) {
        sum += num;
    }

    return sum;
}