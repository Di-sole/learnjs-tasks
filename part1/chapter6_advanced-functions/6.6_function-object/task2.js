function sum(a) {
    let sum = a;

    function calc(b) {
        sum += b;
        return calc;
    }

    calc.toString = () => {return sum}

    return calc;
}