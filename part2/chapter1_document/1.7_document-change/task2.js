function createList() {
    const list = document.createElement('ul');
    document.body.append(list);

    while (true) {
        const text = prompt('Введите текст для элемента списка');

        if (!text) {
            break;
        }

        const li = document.createElement('li');
        li.textContent = text;
        list.append(li);
    }
}
