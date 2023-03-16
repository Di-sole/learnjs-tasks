// Задерживающий декоратор
function delay(func, ms) {
    return function() {
        setTimeout(() => func.apply(this, arguments), ms);
    }
}