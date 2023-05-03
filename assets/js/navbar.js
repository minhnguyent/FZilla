const navbarItems = [
    {
        item: 'Trang chủ',
        link: 'index.html'
    },
    {
        item: 'Hành động',
        link: 'hanh-dong.html'
    },
    {
        item: 'Viễn tưởng',
        link: 'vien-tuong.html'
    },
    {
        item: 'Anime',
        link: 'anime.html'
    },
    {
        item: 'Tình cảm',
        link: 'tinh-cam.html'
    },
    {
        item: 'Học đường',
        link: 'hoc-duong.html'
    },
    {
        item: 'Khoa học',
        link: 'khoa-hoc.html'
    },
    {
        item: 'Phim tài liệu',
        link: 'tai-lieu.html'
    }
];

const navbarItemsMobile = [
    {
        item: 'Trang chủ',
        link: 'index.html'
    },
    {
        item: 'Hành động',
        link: 'hanh-dong.html'
    },
    {
        item: 'Viễn tưởng',
        link: 'vien-tuong.html'
    },
    {
        item: 'Anime',
        link: 'anime.html'
    },
];

const navbarElement = document.querySelector('.navbar-nav');

function renderNavbar() {
    if (navbarElement) {
        navbarElement.innerHTML = '';
        // render navbar
        for (let i = 0; i < 4; i++) {
            navbarElement.innerHTML +=
                `<li class="nav-item">
                <a class="nav-link" href="./${navbarItems[i]['link']}">${navbarItems[i]['item']}</a>
            </li>`;
        }

        let otherCategories = '';

        for (let i = 4; i < navbarItems.length; i++) {
            otherCategories += `
            <li class="dropdown__list-item">
                <a class="nav-link" href="./${navbarItems[i]['link']}">${navbarItems[i]['item']}</a>
            </li>`;
        }

        navbarElement.innerHTML += `<li class="nav-item dropdown">
            <a class="nav-link dropdown__btn dropdown__btn--category" href="#" role="button" aria-expanded="false">
                Thể loại khác <i class="fa fa-caret-down" aria-hidden="true"></i>
            </a>
            <ul class="dropdown__list dropdown__list--category bg-dark bg-gradient">
                ${otherCategories}
            </ul>
        </li>`;

        // active page 

        let path = window.location.pathname;
        let found = false;

        navbarElement.querySelectorAll('a').forEach(function(item, value) {
            if (item.href.substring(item.href.lastIndexOf('/FZilla/')) === (`${path}`)) {
                item.classList.add('active-link');
                item.href = '#';
                found = true;
            }
        });

        if (!found) {
            navbarElement.querySelectorAll('a').forEach(function(item, value) {
                if (path === '/FZilla/' && item.textContent === 'Trang chủ') {
                    item.classList.add('active-link');
                    found = true;
                }
            });
        }

        setDropdownType(document.querySelector('.dropdown__btn--category').parentElement);
    }
}

function renderNavbarMobile() {
    if (navbarElement) {
        navbarElement.innerHTML = '';

        // render navbar
        for (let i = 0; i < navbarItemsMobile.length; i++) {
            navbarElement.innerHTML +=
                `<li class="nav-item">
                <a class="nav-link" href="./${navbarItemsMobile[i]['link']}">${navbarItemsMobile[i]['item']}</a>
            </li>`;
        }

        navbarElement.innerHTML += `<div class="header__user header__user--logged-out me-1">
            <a class="nav-link nav-link--account" href="login.html">Đăng nhập</a>
            <a class="nav-link nav-link--account" href="register.html">Đăng kí</a>
            <a class="nav-link nav-link--username" href="user_profile.html"></a>
            <a class="nav-link user-logout nav-link nav-link--user-mobile-expand" href="#">
                <i class="fa-solid fa-right-from-bracket"></i> Đăng xuất
            </a>
        </div>`

        // active page 

        let path = window.location.pathname;
        let found = false;

        navbarElement.querySelectorAll('a').forEach(function(item, value) {
            if (item.href.substring(item.href.lastIndexOf('/FZilla/')) === (`${path}`)) {
                item.classList.add('active-link');
                item.href = '#';
                found = true;
            }
        });

        if (!found) {
            navbarElement.querySelectorAll('a').forEach(function(item, value) {
                if (path === '/FZilla/' && item.textContent === 'Trang chủ') {
                    item.classList.add('active-link');
                    found = true;
                }
            });
        }
    }
}

if (window.innerWidth < 768) {
    isMobile = true;
    renderNavbarMobile();
} else {
    isMobile = false;
    renderNavbar();
}

window.onresize = function(event) {
    if (window.innerWidth >= 768 && isMobile) {
        isMobile = false;
        renderNavbar();
    } else if (window.innerWidth < 768 && !isMobile) {
        isMobile = true;
        renderNavbarMobile();
    }
}
