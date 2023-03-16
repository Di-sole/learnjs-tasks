// заметка рядом с элементом
function positionAt(anchor, position, elem) {
    const coords = anchor.getBoundingClientRect();

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