// поведение 'подсказка'
document.addEventListener('mouseover', (e) => {
    if (!e.target.dataset.tooltip) return;

    const tooltipEl = document.createElement('span');
    tooltipEl.className = 'tooltip';
    tooltipEl.innerHTML = e.target.dataset.tooltip;
    document.body.append(tooltipEl);

    const coords = e.target.getBoundingClientRect();

    let left = coords.left + (e.target.offsetWidth - tooltipEl.offsetWidth) / 2;
    if (left < 0) left = 0;

    let top = coords.top - tooltipEl.offsetHeight - 5;
    if (top < 0) {
        top = coords.top + e.target.offsetHeight + 5;
    }

    tooltipEl.style.left = left + 'px';
    tooltipEl.style.top = top + 'px';
});

document.addEventListener('mouseout', (e) => {
    if (!e.target.dataset.tooltip) return;

    const tooltipEl = document.querySelector('.tooltip');
    if (tooltipEl) {
        tooltipEl.remove();
    }
});