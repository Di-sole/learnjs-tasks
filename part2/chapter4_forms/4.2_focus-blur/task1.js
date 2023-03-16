// Редактируемый div
let viewEl = document.querySelector('.view');
let editEl = null;

viewEl.addEventListener('click', startEdit);

function startEdit() {
    editEl = document.createElement('textarea');
    editEl.className = 'edit';
    editEl.value = viewEl.innerHTML;

    editEl.addEventListener('blur', endEdit);
    editEl.addEventListener('keydown', (e) => { if (e.key == 'Enter') endEdit() });
    
    viewEl.replaceWith(editEl);
    editEl.focus();
}

function endEdit() {
    viewEl.innerHTML = editEl.value;
    editEl.replaceWith(viewEl);
  }