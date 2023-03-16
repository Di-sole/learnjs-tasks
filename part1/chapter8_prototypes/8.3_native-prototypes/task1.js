// Добавить функциям метод "f.defer(ms)"

Function.prototype.defer = function(ms) {
    setTimeout(this, ms);
}