const viInformationTitle = {
    username: 'Tên đăng nhập',
    fullname: 'Họ và tên',
    email: 'Email',
    phone: 'Số điện thoại',
    registrationDate: 'Ngày đăng kí'
};


// Mô phỏng các chức năng đăng nhập, đăng xuất
function getUserData() {
    return typeof localStorage['user'] === 'undefined' ? undefined : JSON.parse(localStorage['user']);
}

function setUserData(user) {
    localStorage.setItem('user', JSON.stringify(user));
}

// Logout event
document.querySelectorAll('.user-logout').forEach(function(element) {
    element.addEventListener('click', function () {
        // update userData in allUserData
        let allUserData = JSON.parse(localStorage['allUserData']);
        let currentUser = getUserData();

        for (let key in allUserData) {
            if (allUserData[key]['username'] === currentUser['username'])
                allUserData[key] = currentUser;
        }

        localStorage['allUserData'] = JSON.stringify(allUserData);

        // remove user from local
        localStorage.removeItem('user');

        /************************************
         *  Hiển thị thông báo đăng xuất    *
         * **********************************/
        toast({title:'Thành công',message:'Đăng xuất thành công',type:'success', duration:3000});
        
        setTimeout(() => {
            if (window.location.pathname === '/FZilla/user_profile.html')
                window.location.href = '/FZilla/index.html';
            else window.location.reload();
        }, 1500);

    });
});

function isValidPassword(values) {
    let userData = getUserData();

    if (userData['password'] === values['password_old']) {
        userData['password'] = values['password'];
        return true;
    } else {
        return false;
    }
}

// Header
function renderUserHeader() {
    const userData = getUserData();

    if (typeof userData !== 'undefined') {
        setDropdownType(document.querySelector('.dropdown__btn--account').parentElement);
        // Change state
        document.querySelectorAll('.header__user').forEach(function(item) {
            item.classList.remove('header__user--logged-out');
            item.classList.add('header__user--logged-in');
        });
        // Show user
        document.querySelectorAll('.nav-link--username').forEach(function(item) {
            item.innerHTML = `${userData['username']} <span class="px-2"><img class="header__user-img" src="${userData.avatar}"></img></span>`;
        });;
            
    } else {
         // Change state
         document.querySelectorAll('.header__user').forEach(function(item) {
            item.classList.add('header__user--logged-out');
            item.classList.remove('header__user--logged-in');
        });
 
    }
}

// User profile 
function renderUserProfile() {
    const userInformationElement = document.querySelector('.user-information');
    if (userInformationElement) {
        let userData = getUserData();

        const usernameElement = userInformationElement.querySelector('.user-information__username');
        const fullnameElement = userInformationElement.querySelector('.user-information__fullname');
        const emailElement = userInformationElement.querySelector('.user-information__email');
        const phoneElement = userInformationElement.querySelector('.user-information__phone');
        const registrationDateElement = userInformationElement.querySelector('.user-information__registration-date');
        const avatarElement = userInformationElement.querySelector('.user-avatar');
        const editProfileButton = userInformationElement.querySelector('.user-information__edit-profile');

        function renderInformation(element, information, title) {
            element.innerHTML =
                `<div class="user-information-title">${title}</div>
            <input type="text" class="user-information-content" disabled value="${information}"></input>`;
        };

        function renderUserAvatar(element, avatar) {
            element.innerHTML =
            `<img class="user-avatar__img" src="${avatar}" alt="">`;
        }

        function renderProfileMovies(root, movies, colClassList = ['col-2']) {
            if (!root) return;

            root.innerHTML = movies.map((value) => {
                let movie = moviesByCategory[value['category']][value['filmId']];
                let category = value['category'];
                let id = value['filmId'];
                return `
                <div class="${colClassList.join(' ')}">
                <div class="film-item">
                <a href="/FZilla/film_info.html?film_category=${category}&film_id=${id}" class="film-item-inner">
                <div class="film-item__main">
                <div class="film-item__thumb">
                <img src="${movie.thumb}" alt="${movie.titleEn}" class="film-item__thumb-img">
                </div>
                
                <div class="film-item__label">
                <div class="film-item__label-item">HD</div>
                <div class="film-item__label-item">Thuyết minh</div>
                </div>
                
                <div class="film-item__rating ${movie.rating ? '' : 'film-item__rating--not-available'}">
                <span class="film-item__rating-icon"><i class="fa-regular fa-star"></i></span>
                <span class="film-item__rating-num">${movie.rating}</span>
                <span class="film-item__rating-NA">N/A</span>
                </div>
                
                <div class="film-item__play-btn" title="Xem phim">
                <span class="film-item__play-btn-icon"><i class="fa-solid fa-play"></i></span>
                </div>
                </div>
                <div class="film-item__desc">
                <div class="film-item__title" title="${movie.titleVn}">${movie.titleVn}</div>
                <div class="film-item__subtitle">
                <span class="film-item__subtitle-item" title="${movie.titleEn} (${movie.year})">${movie.titleEn} (${movie.year})</span>
                </div>
                    </div>
                    </a>
                    </div>
                    </div>
                    `;
            }).join('');
        }

        
        renderInformation(usernameElement, userData['username'], viInformationTitle['username']);
        renderInformation(fullnameElement, userData['fullname'], viInformationTitle['fullname']);
        renderInformation(emailElement, userData['email'], viInformationTitle['email']);
        renderInformation(phoneElement, userData['phone'], viInformationTitle['phone']);
        renderInformation(registrationDateElement, userData['registrationDate'], viInformationTitle['registrationDate']);
        renderUserAvatar(avatarElement, userData['avatar']);
        
        // renderProfileMovies(document.querySelector('.user-bookmark .row'), userData['favourite']);
        // renderProfileMovies(document.querySelector('.user-watch-history .row'), userData['history']);
        
        editProfileButton.addEventListener('click', function () {
            toast({title:'Thông tin',message:'Chức năng đang được cập nhật!',type:'info', duration:3000});
        });
    }
}

function createUser(user) {
    // set registrationDate
    let rightNow = new Date();
    let res = rightNow.toISOString().slice(0,10).replace(/-/g,"-");
    user['registrationDate'] = res;

    // set default avatar
    switch (user['sex']) {
        case 'male': 
            user['avatar'] = '/FZilla/assets/img/avatar-male.png';
            break;
        case 'female':
            user['avatar'] = '/FZilla/assets/img/avatar-female.png';
            break;
        default:
            user['avatar'] = '/FZilla/assets/img/avatar-default.png';
            break;
    }

    // set favourite and history
    user['favourite'] = [];
    user['history'] = [];

    
    // addUser
    let allUserData = JSON.parse(localStorage['allUserData']);
    allUserData.push(user);
    localStorage['allUserData'] = JSON.stringify(allUserData);

    return true;
}

function verifyLogin(values) {
    let allUserData = JSON.parse(localStorage['allUserData']);

    let loggedIn = false;

    for (let user of allUserData) {
        if (user['username'] === values['username'] && user['password'] === values['password']) {
            setUserData(user);
            loggedIn = true;
            break;
        }
    }

    /************************************
     *  Hiển thị thông báo đăng nhập    *
     * thành công hoặc thất bại         *
     * **********************************/
    if (loggedIn) {
        toast({title:'Thành công',message:'Đăng nhập thành công',type:'success', duration:3000});
        return true;
    } else {   
        toast({title:'Thất bại',message:'Sai tên đăng nhập hoặc mật khẩu',type:'error', duration:3000});
        return false;
    }
}

renderUserHeader();
renderUserProfile();