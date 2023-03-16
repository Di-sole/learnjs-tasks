// Получить данные о пользователях GitHub
async function getUsers(names) {
    let users = [];

    for (let name of names) {
        let user = fetch(`https://api.github.com/users/${name}`)
            .then(response => {
                if (!response.ok) {
                    return null;
                } else {
                    return response.json();
                }
            })
        
            users.push(user);
    }

    let results = await Promise.all(users);

    return results;
}
