const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = form.username.value;
    const password = form.password.value;
    // Menggunakan objek atau array untuk menyimpan data pengguna dan kata sandi
    const users = {
        user1: {
            username: 'Rifky Maulana',
            password: '2225814'
        },
        user2: {
            username: 'rifky',
            password: '2225814'
        },
        // Menambahkan pengguna lainnya
    };
    // Memeriksa apakah username dan password yang diinputkan sesuai dengan data pengguna yang tersimpan
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
