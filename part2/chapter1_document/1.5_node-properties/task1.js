const liElements = document.querySelectorAll('li');

for (let li of liElements) {
    const text = li.firstChild.data;
    const childrens = li.querySelectorAll('li').length;
    alert(text + ' ' + childrens);
}