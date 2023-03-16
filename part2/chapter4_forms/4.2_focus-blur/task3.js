// Мышь, управляемая клавиатурой
const mouse = document.querySelector('#mouse');

mouse.tabIndex = 1;

mouse.addEventListener('click', (e) => {
    mouse.style.position = 'fixed';
    mouse.style.top = mouse.getBoundingClientRect().top + 'px';
    mouse.style.left = mouse.getBoundingClientRect().left + 'px';
});

mouse.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowUp':
            mouse.style.top = parseInt(mouse.style.top) - mouse.offsetHeight + 'px';
            break;
        case 'ArrowDown':
            mouse.style.top = parseInt(mouse.style.top) + mouse.offsetHeight + 'px';
            break;
        case 'ArrowLeft':
            mouse.style.left = parseInt(mouse.style.left) - mouse.offsetWidth + 'px';
            break;
        case 'ArrowRight':
            mouse.style.left = parseInt(mouse.style.left) + mouse.offsetWidth + 'px';
            break;
    }
});