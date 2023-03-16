function printList1(list) {
    alert(list.value);
    if (list.next) {
        printList1(list.next);
    }
}

function printList2(list) {
    let tmpList = list;

    while (tmpList) {
        alert(tmpList.value);
        tmpList = tmpList.next;
    }
}
