const table = document.querySelector('table');
const rows = Array.from(table.rows).slice(1);
const sortedRows = rows.sort((a, b) => a.cells[0].textContent > b.cells[0].textContent ? 1 : -1);
table.tBodies[0].append(...sortedRows);