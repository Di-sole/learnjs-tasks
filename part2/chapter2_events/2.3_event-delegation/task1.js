const container = document.querySelector('#container');
container.addEventListener('click', (event) => {
    if (event.target.className == 'remove-button') {
        event.target.closest('.pane').remove();
    }
});