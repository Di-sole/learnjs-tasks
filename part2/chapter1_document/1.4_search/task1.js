const tableEl = document.getElementById('age-table');
const labels = tableEl.getElementsByTagName('label');
const tdEl = tableEl.querySelector('td');

const formEl = document.querySelector('form[name="search"]');
const inputs = formEl.querySelectorAll('input');
const firstInputEl = inputs[0];
const lastInputEl = inputs[inputs.length-1];