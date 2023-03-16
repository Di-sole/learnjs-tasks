// сортируемая таблица
const tableEl = document.querySelector('#grid');

tableEl.addEventListener('click', (e) => {
    if (e.target.tagName != 'TH') return;

    const type = e.target.dataset.type;
    const column = e.target.cellIndex;
    const rows = Array.from(tableEl.rows).slice(1);

    switch (type) {
        case 'number':
            rows.sort((a, b) => a.cells[column].textContent - b.cells[column].textContent);
            break
        
        case 'string':
            rows.sort((a, b) => a.cells[column].textContent > b.cells[column].textContent ? 1 : -1);
            break
    }

    tableEl.tBodies[0].append(...rows);
});