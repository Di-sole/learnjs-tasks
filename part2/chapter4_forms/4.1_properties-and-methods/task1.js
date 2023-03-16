const selectEl = document.querySelector('#genres');

let selectedOption = selectEl.options[selectEl.selectedIndex];
alert(selectedOption.value);
alert(selectedOption.text);

let option = new Option('Классика', 'classic', true, true);
selectEl.append(option);
