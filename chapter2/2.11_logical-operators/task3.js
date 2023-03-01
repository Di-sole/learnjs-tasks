let userName = prompt('Кто там?');

if (userName === 'Админ') {
	let password = prompt('Пароль?');

	if (password === 'Я главный') {
		alert('Здравствуйте');
	} else if (password === null || password === '') {
		alert('Отменено');
	} else {
		alert('Неверный пароль');
	}
} else if (userName === null || userName === '') {
	alert('Отменено');
} else {
	alert('Я вас не знаю');
}
