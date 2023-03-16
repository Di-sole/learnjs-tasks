const panes = document.querySelectorAll('.pane');
panes.forEach(p => {
    p.insertAdjacentHTML("afterbegin", '<button class="remove-button">[x]</button>');
    p.firstChild.addEventListener('click', () => p.remove());
});
