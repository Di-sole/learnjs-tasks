// Раскрывающееся дерево
const tree = document.querySelector('.tree');
const liElements = tree.querySelectorAll('li');
liElements.forEach(li => {
    let span = document.createElement('span');
    li.prepend(span);
    span.append(span.nextSibling);
});

tree.addEventListener('click', (e) => {
    if (e.target.tagName != 'SPAN') return;
    
    const nestedList = e.target.parentNode.querySelector('ul')
    if (nestedList) {
        nestedList.hidden = !nestedList.hidden;
    }
});