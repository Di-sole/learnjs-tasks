function Calculator() {
    this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b
    };

    this.calculate = function(str) {
        const arr = str.split(' ');
        const a = +arr[0];
        const b = +arr[2];
        const operator = arr[1];

        return this.methods[operator](a, b);
    }

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}