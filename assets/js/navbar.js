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

const navbarElement = document.querySelector('.navbar-nav');

function renderNavbar() {
    if (navbarElement) {
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
            <a class="nav-link dropdown__btn" href="#" role="button" aria-expanded="false">
                Thể loại khác <i class="fa fa-caret-down" aria-hidden="true"></i>
            </a>
            <ul class="dropdown__list bg-dark bg-gradient">
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
    }
}

renderNavbar();