const menu = document.createElement('div');
menu.innerHTML = '<p class="title">Сладости (нажми меня)!</p>';

const list = document.createElement('ul');
list.innerHTML = '<li>Пирожное</li><li>Пончик</li><li>Мёд</li>';
list.hidden = false;

menu.append(list);
menu.addEventListener('click', () => {
    list.hidden = !list.hidden;
});

document.body.append(menu);