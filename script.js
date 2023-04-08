const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;
    
    const users = {
        user1: {
            username: 'Rifky Maulana',
            password: '2225814'
        },
        user2: {
            username: 'rifky',
            password: '2225814'
        },

    };

   let validCredentials = false;
    for (let user in users) {
        if (users[user].username === username && users[user].password === password) {
            validCredentials = true;
            break;
        }
    }
    if (validCredentials) {
        window.location.href = 'home.html';
    } else {
        alert('Username atau password salah!');
    }
});
