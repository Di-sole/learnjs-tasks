function moveBall(event) {
    const field = event.currentTarget;
    const fieldCoords = field.getBoundingClientRect();
    let ballTop = event.clientY - fieldCoords.top - field.clientTop - ball.clientHeight / 2;
    let ballLeft = event.clientX - fieldCoords.left - field.clientLeft - ball.clientWidth / 2;

    if (ballTop < 0) {
        ballTop = 0;
    }

    if (ballLeft < 0) {
        ballLeft = 0;
    }

    if (ballLeft + ball.clientWidth > field.clientWidth) {
        ballLeft = field.clientWidth - ball.clientWidth;
    }

    if (ballTop + ball.clientHeight > field.clientHeight) {
        ballTop = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = ballLeft + 'px';
    ball.style.top = ballTop + 'px';
}