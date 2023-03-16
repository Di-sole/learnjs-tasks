// Модальное диалоговое окно с формой
const form = document.querySelector('#prompt-form');
const container = document.querySelector('#prompt-form-container');
const showBtn = document.querySelector('#show-button');

showBtn.addEventListener('click', () => {
    showPrompt("Введите что-нибудь<br>...умное :)", (value) => alert("Вы ввели: " + value));
});

function showPrompt(html, callback) {
    showCover();

    const messageEl = form.querySelector('#prompt-message');
    messageEl.innerHTML = html;
    form.text.value = '';

    const lastElem = form.elements[form.elements.length - 1];
    const firstElem = form.elements[0];

    function complete(value) {
        hideCover();
        toggleForm();
        callback(value);
    }

    lastElem.addEventListener('keydown', (e) => {
        if (e.key == 'Tab' && !e.shiftKey) {
            firstElem.focus();
            return false;
        }
    });

    firstElem.addEventListener('keydown', (e) => {
        if (e.key == 'Tab' && e.shiftKey) {
            lastElem.focus();
            return false;
        }
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const value = form.text.value;
        if (value == '') return false;

        complete(value);
    });

    form.cancel.addEventListener('click', () => (complete(null)));

    document.addEventListener('keydown', (e) => {
        if (e.key == 'Escape') {
            complete(null);
        }
    });

    toggleForm();
    form.elements.text.focus();
}


function toggleForm() {
    container.hidden = !container.hidden;
}

function showCover() {
    const cover = document.createElement('div');
    cover.className = 'cover-div';
    cover.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        z-index: 9000;
        width: 100%;
        height: 100%;
        background-color: gray;
        opacity: 0.3;
    `;

    document.body.style.overflowY = 'hidden';
    document.body.append(cover);
}

function hideCover() {
  const cover = document.querySelector('.cover-div');
    if (cover) cover.remove();
    document.body.style.overflowY = '';
}