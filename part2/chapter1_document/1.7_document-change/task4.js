const listItems = document.querySelectorAll('li');

for (let li of listItems) {
    const liCount = li.getElementsByTagName('li').length;
    if (!liCount) continue;
    li.firstChild.data += `[${liCount}]`;
}