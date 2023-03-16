// Цветные часы с использованием setInterval
const clockEl = document.createElement('div');
clockEl.className = 'clock';
clockEl.innerHTML = `
    <span class='hour' style='color:red'>hh</span>:
    <span class='min' style='color:green'>mm</span>:
    <span class='sec' style='color:blue'>ss</span>
`;

document.body.append(clockEl);

let timerId;

function clockStart() {
  timerId = setInterval(update, 1000);
  update();
}

function clockStop() {
  clearInterval(timerId);
  timerId = null;
}

function update() {
    let date = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clockEl.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clockEl.children[1].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clockEl.children[2].innerHTML = seconds;
}