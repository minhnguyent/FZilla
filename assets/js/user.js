const user = {
    username: 'fzilla', // username maxlength12
    email: 'fzilla@github.com',
    password: 12345678,
    avatar: '../img/nav-brand.png',
    favouriteFilm: [

    ]
}

localStorage.setItem('user', JSON.stringify(user));

function getUserData() {
    return JSON.parse(localStorage['user']);
}

const userData = getUserData();

if (typeof userData !== 'undefined') {
    document.querySelectorAll('.nav-link--account').forEach(function(item) {
        item.classList.add('hidden');
    });

    let usernameElement = document.querySelector('.nav-link--username');
    
    usernameElement.classList.remove('hidden');
    usernameElement.innerHTML = 
    `${userData['username']} <span class="px-2"><i
    class="fa fa-user" aria-hidden="true"></i></span>`;
    
}