function filterRange(arr, a, b) {
    const result = arr.filter(item => item >= a && item <= b);
    return result;
}