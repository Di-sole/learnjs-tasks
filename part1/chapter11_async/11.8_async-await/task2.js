class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}
  
async function loadJson(url) {
    let response = await fetch(url);

    if (response.status == 200) {
        let json = await response.json();
        return json;
    } else {
        throw new HttpError(response);
    }
}

async function demoGithubUser() {
    let user;

    while (true) {
        let name = prompt('Введите логин');

        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            break;
        } catch(error) {
            if (error instanceof HttpError && error.response.status == 404) {
                alert('Такого пользователя не существует, пожалуйста, повторите ввод.');
            } else {
                throw error;
            }
        }
    }
    
    alert(`Полное имя: ${user.name}.`);
    return user;
}