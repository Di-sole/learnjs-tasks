// Редактирование TD по клику
const tableEl = document.querySelector('#bagua-table');
let editEl = null;

tableEl.addEventListener('click', (e) => {
    if (e.target.tagName == 'TD') {
        if (editEl) return;
        startEdit(e.target);
    } else if (e.target.className == 'button_ok') {
        saveChanges();
    } else if (e.target.className == 'button_cancel') {
        cancelChanges()
    }
});

function startEdit(targetEl) {
    editEl = {
        elem: targetEl,
        data: targetEl.innerHTML,
    }

    editEl.elem.style.cssText = 'positin:relative; padding:0';

    const textArea = document.createElement('textarea');
    textArea.value = targetEl.innerHTML;
    textArea.rows = 6;
    textArea.style.cssText = 'display:block; outline:none; border:none; resize:none';

    const buttonsEl = createButtons();

    targetEl.innerHTML = '';
    targetEl.append(textArea);
    targetEl.append(buttonsEl)
    textArea.focus();
}

function saveChanges() {
    editEl.elem.innerHTML = editEl.elem.firstChild.value;
    editEl = null;
}

function cancelChanges() {
    editEl.elem.innerHTML = editEl.data;
    editEl = null;
}

function createButtons() {
    const container = document.createElement('div');
    container.style.position = 'absolute';

    const okBtn = document.createElement('button');
    okBtn.className = 'button_ok';
    okBtn.textContent = 'OK';

    const cancelBtn = document.createElement('button');
    cancelBtn.className = 'button_cancel';
    cancelBtn.textContent = 'CANCEL';

    container.append(okBtn);
    container.append(cancelBtn);

    return container;
}