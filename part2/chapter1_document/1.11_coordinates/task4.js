// заметка внутри элемента (абсолютное позиционирование)
function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + window.pageYOffset,
        right: box.right + window.pageXOffset,
        bottom: box.bottom + window.pageYOffset,
        left: box.left + window.pageXOffset
    };
}

function positionAt(anchor, position, elem) {
    const coords = getCoords(anchor);

    switch (position) {
        case 'top-out':
            elem.style.top = coords.top - elem.offsetHeight + "px";
            elem.style.left = coords.left + "px";
            break;

        case 'right-out':
            elem.style.top = coords.top + "px";
            elem.style.left = coords.left + anchor.offsetWidth + "px";
            break;

        case 'bottom-out':
            elem.style.top = coords.top + anchor.offsetHeight + "px";
            elem.style.left = coords.left + "px";
            break;

        case 'top-in':
            elem.style.top = coords.top + "px";
            elem.style.left = coords.left + "px";
            break;

        case 'right-in':
            elem.style.width = '150px';
            elem.style.top = coords.top + "px";
            elem.style.left = coords.left + anchor.offsetWidth - elem.offsetWidth + "px";
            break;

        case 'bottom-in':
            elem.style.top = coords.top + anchor.offsetHeight - elem.offsetHeight + "px";
            elem.style.left = coords.left + "px";
            break;
    }
}