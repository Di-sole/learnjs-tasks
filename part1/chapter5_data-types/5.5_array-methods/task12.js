function unique(arr) {
    let result = [];

    arr.forEach(el => {
        if (!result.includes(el)) {
            result.push(el);
        }
    });

    return result;
}