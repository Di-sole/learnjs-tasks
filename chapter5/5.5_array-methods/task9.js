function sortByAge(users) {
    users.sort((a, b) => a.age > b.age ? 1 : -1);
}