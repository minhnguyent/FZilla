const navbarItems = [
    {
        item: 'Trang chủ',
        link: 'index.html'
    },
    {
        item: 'Hành động',
        link: 'hanhdong.html'
    },
    {
        item: 'Viễn tưởng',
        link: 'vientuong.html'
    },
    {
        item: 'Anime',
        link: 'anime.html'
    },
    {
        item: 'Tình cảm',
        link: 'tinhcam.html'
    },
    {
        item: 'Học đường',
        link: 'hocduong.html'
    },
    {
        item: 'Khoa học',
        link: 'khoahoc.html'
    },
    {
        item: 'Phim tài liệu',
        link: 'tailieu.html'
    }
];

const navbarElement = document.querySelector('.navbar-nav');

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
        if (item.href.substring(item.href.lastIndexOf('/')) === (`${path}`)) {
            item.classList.add('active-link');
            item.href = '#';
            found = true;
        }
    });

    if (!found) {
        navbarElement.querySelectorAll('a').forEach(function(item, value) {
            if (path === '/' && item.textContent === 'Trang chủ') {
                item.classList.add('active-link');
                found = true;
            }
        });
    }
}