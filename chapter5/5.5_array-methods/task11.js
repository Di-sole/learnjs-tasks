function getAverageAge(users) {
    let ages = [];
    users.forEach(user => ages.push(user.age));
    let agesSum = ages.reduce((sum, current) => sum + current, 0);
    return agesSum / ages.length;
}