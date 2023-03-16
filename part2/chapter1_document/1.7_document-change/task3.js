function createList(obj) {
    if (!Object.keys(obj).length) return;

    const list = document.createElement('ul');

    for(let key in obj) {
        const li = document.createElement('li');
        li.textContent = key;

        const nestedList = createList(obj[key]);
        if (nestedList) {
            li.append(nestedList);
        }

        list.append(li);
    }

    return list;
}

function createTree(container, data) {
    const list = createList(data);
    container.append(list);
}
