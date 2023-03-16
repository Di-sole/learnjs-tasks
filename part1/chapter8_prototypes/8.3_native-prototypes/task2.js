// Добавить функциям декорирующий метод "defer()"

Function.prototype.defer = function(ms) {
    let fun = this;
    return function(...args) {
        setTimeout(() => fun.apply(this, args), ms);
    }
}