const tableEl = document.body.firstElementChild;

for (let i = 0; i <= tableEl.rows.length; i++) {
    tableEl.rows[i].cells[i].style.backgroundColor = 'red';
}