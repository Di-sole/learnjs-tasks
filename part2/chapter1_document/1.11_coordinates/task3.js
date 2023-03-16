// заметка около элемента (абсолютное позиционирование)
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

    if (position == 'top') {
        elem.style.top = coords.top - elem.offsetHeight + "px";
        elem.style.left = coords.left + "px";
    } else if (position == 'right') {
        elem.style.top = coords.top + "px";
        elem.style.left = coords.left + anchor.offsetWidth + "px";
    } else if (position == 'bottom') {
        elem.style.top = coords.top + anchor.offsetHeight + "px";
        elem.style.left = coords.left + "px";
    }
}