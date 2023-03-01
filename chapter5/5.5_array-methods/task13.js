function groupById(array) {
    const result = array.reduce((obj, value) => {
        obj[value.id] = value;
        return obj;
    }, {});

    return result;
}