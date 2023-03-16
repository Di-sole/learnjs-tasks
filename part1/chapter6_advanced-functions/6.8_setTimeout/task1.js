function printNumbers(from, to) {
    let currentNum = from;

    let intervalId = setInterval(() => {
        alert(currentNum);

        if (currentNum == to) {
            clearInterval(intervalId);
        }
        
        currentNum++;
    }, 1000);
}

function printNumbers2(from, to) {
    let currentNum = from;

    setTimeout(function print() {
        alert(currentNum);
        
        if (currentNum != to) {
            setTimeout(print, 1000);
        }
        
        currentNum++;
    }, 1000);
}
