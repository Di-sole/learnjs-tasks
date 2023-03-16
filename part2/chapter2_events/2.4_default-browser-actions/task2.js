const fieldEl = document.querySelector('#contents');
fieldEl.addEventListener('click', (e) => {
    if (e.target.tagName != 'A' && !e.target.closest('a')) return;

    if (!confirm('Вы действительно хотите покинуть таблицу?')) {
        e.preventDefault();
    }
});