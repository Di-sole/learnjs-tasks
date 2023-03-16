function filterRangeInPlace(arr, a, b) {
    arr.forEach((item, index, array) => {
        if (item < a || item > b) {
            array.splice(index, 1);
        }
    });
}