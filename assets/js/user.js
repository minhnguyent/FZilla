/* ************************************* *
 * Tạm thời hoàn tất                     *
 * Chỉ cần bổ sung thông báo đăng xuất   *
 * Thêm tính năng đăng nhập              *
 * ************************************* */

const viInformationTitle = {
    username: 'Tên đăng nhập',
    fullname: 'Họ và tên',
    email: 'Email',
    phone: 'Số điện thoại',
    registrationDate: 'Ngày đăng kí'
};


function getUserData() {
    return typeof localStorage['user'] === 'undefined' ? undefined : JSON.parse(localStorage['user']);
}

function setUserData(user) {
    localStorage.setItem('user', JSON.stringify(user));
}


document.querySelector('.user-logout').addEventListener('click', function() {
    localStorage.removeItem('user');
    renderUserHeader();
    
    
    if (window.location.pathname === '/userProfile.html')
    window.location.href = '/index.html';
    
    /************************************
     *  Hiển thị thông báo đăng xuất    *
     * **********************************/
});

// Header

function renderUserHeader() {
    const userData = getUserData();
    
    if (typeof userData !== 'undefined') {
        
        document.querySelectorAll('.nav-link--account').forEach(function (item) {
            item.classList.add('hidden');
        });
        
        let usernameElement = document.querySelector('.nav-link--username');
        
        usernameElement.classList.remove('hidden');
        usernameElement.innerHTML =
        `${userData['username']} <span class="px-2"><i
        class="fa fa-user" aria-hidden="true"></i></span>`;
    } else {
        document.querySelectorAll('.nav-link--account').forEach(function (item) {
            item.classList.remove('hidden');
        });
        document.querySelector('.nav-link--username').classList.add('hidden');
    }
}

renderUserHeader();

// User profile 
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
    
    renderInformation(usernameElement, userData['username'], viInformationTitle['username']);
    renderInformation(fullnameElement, userData['fullname'], viInformationTitle['fullname']);
    renderInformation(emailElement, userData['email'], viInformationTitle['email']);
    renderInformation(phoneElement, userData['phone'], viInformationTitle['phone']);
    renderInformation(registrationDateElement, userData['registrationDate'], viInformationTitle['registrationDate']);
    renderMovieList($('.user-bookmark .row'), userData.favourite);
    renderMovieList($('.user-watch-history .row'), userData.history);
    
    avatarElement.innerHTML = 
    `<img class="user-avatar__img" src="${userData['avatar']}" alt="">`;
    
    function renderInformation(element, information, title) {
        element.innerHTML =
        `<div class="user-information-title">${title}</div>
        <input type="text" class="user-information-content" disabled value="${information}"></input>`;
    };
    
    editProfileButton.addEventListener('click', function() {
        alert('Chức năng đang cập nhật! Vui lòng quay lại sau!');
    });
}
