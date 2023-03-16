// Депозитный калькулятор
const form = document.forms.calculator;
const moneyBefore = document.querySelector('#money-before');
const moneyAfter = document.querySelector('#money-after');
const heightAfter = document.querySelector('#height-after');

form.money.addEventListener('input', calculate);
form.months.addEventListener('change', calculate);
form.interest.addEventListener('input', calculate);

function calculate() {
    const initial = +form.money.value;
    if (!initial) return;

    const interest = form.interest.value * 0.01;
    if (!interest) return;

    const years = form.months.value / 12;
    if (!years) return;

    const result = Math.round(initial * (1 + interest) ** years);
    const height = result / form.money.value * 100 + 'px';

    heightAfter.style.height = height;
    moneyBefore.innerHTML = form.money.value;
    moneyAfter.innerHTML = result;
}
