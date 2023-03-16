// Календарь в виде таблицы
function createRow() {
    const row = document.createElement('tr');
    row.innerHTML = '<td></td><td></td><td></td><td></td><td></td><td></td><td></td>';
    return row;
}

function getDay(date) { // получить номер дня недели, от 0 (пн) до 6 (вс)
    let day = date.getDay();
    if (day == 0) day = 7;
    return day - 1;
}

function createCalendar(elem, year, month) {
    // создаем таблицу с шапкой
    const tableEl = document.createElement('table');
    tableEl.innerHTML = `
        <tr>
            <th>пн</th>
            <th>вт</th>
            <th>ср</th>
            <th>чт</th>
            <th>пт</th>
            <th>сб</th>
            <th>вс</th>
        </tr>
    `;  

    elem.append(tableEl);

    const date = new Date(year, month-1);
    let day = date.getDate();
    
    // создаем первый ряд с пробелами
    // с понедельника до первого дня месяца
    const tableBody = tableEl.querySelector('tBody');
    const row = createRow();
    for (let i = getDay(date); i < row.cells.length; i++) {
        row.cells[i].innerHTML = day;
        date.setDate(day++);
    }

    tableBody.append(row);

    // заполняем ячейки календаря с датами
    const lastDay = new Date(year, month, 0).getDate();
    while (day < lastDay) {
        const row = createRow();
        for (let td of row.cells) {
            td.innerHTML = day;
            date.setDate(day++);
        }
        tableBody.append(row);
    }

    // оставляем неиспользованные ячейки последней строки пустыми
    const lastRow = tableBody.rows[tableBody.rows.length - 1];
    for (let i = 0; i < lastRow.cells.length; i++) {
        if (lastRow.cells[i].innerHTML > lastDay) {
            lastRow.cells[i].innerHTML = '';
        }
    }
}

// второй вариант
function createCalendar2(elem, year, month) {
    // создаем таблицу с шапкой
    let table = `<table>
        <tr>
            <th>пн</th>
            <th>вт</th>
            <th>ср</th>
            <th>чт</th>
            <th>пт</th>
            <th>сб</th>
            <th>вс</th>
        </tr>
        <tr>
    `;  
    
    const date = new Date(year, month-1);

    // пробелы для первого ряда
    // с понедельника до первого дня месяца
    for (let i = 0; i < getDay(date); i++) {
        table += '<td></td>';
    }

    // заполняем ячейки календаря с датами
    while (date.getMonth() == month-1) {
        table += `<td>${date.getDate()}</td>`;

        if (getDay(date) % 7 == 6) { 
            table += '</tr><tr>';
        }

        date.setDate(date.getDate() + 1);
    }

    // оставляем неиспользованные ячейки последней строки пустыми
    if (getDay(date) != 0) {
        for (let i = getDay(date); i < 7; i++) {
          table += '<td></td>';
        }
    }

    table += '</tr></table>';
    elem.innerHTML = table;
}
