function printListReverse1(list) {
    if (list.next) {
        printListReverse1(list.next);
    }

    alert(list.value);
}

function printListReverse2(list) {
    let arr = [];
    let tmpList = list;

    while (tmpList) {
        arr.push(tmpList.value);
        tmpList = tmpList.next;
    }

    arr.reverse();

    for (let i = 0; i < arr.length; i++){
        alert(arr[i]);
    }
}
