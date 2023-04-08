const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
	e.preventDefault();
	const username = form.username.value;
	const password = form.password.value;
	if (username === 'Rifky Maulana' && password === '2225814') {
		window.location.href = 'home.html';
	} else {
		alert('Username Dan Password Salah!');
	}
});