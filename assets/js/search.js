const searchForm = document.querySelector('.search-form');

// test history
const historyItemList = {
    history: [
        'Avatar Dòng chảy của nước',
        'Hành động',
        'Loki',
        'Khế ước'
    ]
};
localStorage.setItem('searchHistory', JSON.stringify(historyItemList));


if (searchForm) {
    const searchInput = searchForm.querySelector('.search-form__input');
    const resetButton = searchForm.querySelector('.search-form__reset');
    const submitButton = searchForm.querySelector('.search-form__submit');
    const searchHistoryElement = searchForm.querySelector('.search-history');

    submitButton.addEventListener('click', function(event) {
        event.preventDefault();
        if (searchInput.value === '')
            return ;
        
            
        if (typeof localStorage['searchHistory'] === 'undefined') {
            let historyItemList = {
                history: [
                    searchInput.value
                ]
            };
            localStorage['history'] = historyItemList;
        } else {
            let historyItemList = JSON.parse(localStorage['searchHistory']);
            historyItemList['history'].splice(0, 0, searchInput.value);
            console.log(historyItemList['history']);
            localStorage['searchHistory'] = JSON.stringify(historyItemList);
            renderSearchHistory(searchHistoryElement);
        }
    });

    const showHistory = function() {
        if (searchInput.value === '') {
            renderSearchHistory(searchHistoryElement);
            searchInput.classList.remove('rounded-1');
            searchInput.classList.add('search-form__input--expand');
        }
    }

    const hideHistory = function() {
        searchHistoryElement.innerHTML = '';
        searchInput.classList.add('rounded-1');
        searchInput.classList.remove('search-form__input--expand');
    }

    // Show search history
    searchInput.addEventListener('focus', function () {
        if (typeof localStorage['searchHistory'] !== 'undefined') {
            showHistory();
        }
    });
    searchInput.addEventListener('input', function() {
        this.value ? hideHistory() : showHistory();
    })

    /*****************************************************************
    TODO: focus out form ------------------------------------        */
    searchForm.addEventListener('focusout', function(e) {
        const relatedTarget = e.relatedTarget;
        if (relatedTarget === null) {
            hideHistory();
            return;
        }

        if (relatedTarget.closest('.search-history-item__content')) {
            // TODO: window.location.href="/FZilla/search.html?keyword=<search_content>"
            searchInput.value = relatedTarget.closest('.search-history-item__content').innerHTML;
        }
        else if (relatedTarget.closest('.search-history-item__remove')) {
            // remove item
        }
        else if (relatedTarget.closest('.search-history-item')) {
            searchInput.value = relatedTarget.closest('.search-history-item')
                                .querySelector('.search-history-item__content').innerHTML;
        }
        else if (relatedTarget.closest('.search-form__reset')) {
            setTimeout(() => {
                showHistory();
                searchInput.focus();
            }, 150);
        }
        else {
            hideHistory();
        }
    });
    /*****************************************************************/

    function renderSearchHistory(root) {
        if (typeof localStorage['searchHistory'] === 'undefined') {
            root.innerHTML = '';
            return ;
        }

        // get history from localStorage
        let historyItemList = JSON.parse(localStorage['searchHistory']);

        root.innerHTML = '';

        historyItemList['history'].forEach(function (value, key) {
            let item = document.createElement('div');
            item.classList.add('search-history-item');
            item.setAttribute('tabindex', '0');

            item.innerHTML =
                `<p class="search-history-item__content" tabindex="0">${value}</p>
                <span class="search-history-item__remove" tabindex="0"><i class="fa-solid fa-xmark"></i></span>`

            // add mouseon event 
            item.querySelector('.search-history-item__content').addEventListener('click', function() {
                searchInput.value = this.innerText;
                resetButton.classList.remove('hidden');
            });

            // add remove event
            item.querySelector('.search-history-item__remove').addEventListener('click', function (event) {
                historyItemList['history'].splice(key, 1);

                if (historyItemList['history'].length !== 0) {
                    localStorage['searchHistory'] = JSON.stringify(historyItemList);
                } else {
                    localStorage.removeItem('searchHistory');
                    searchInput.classList.add('rounded-1');
                    searchInput.classList.remove('search-form__input--expand');
                }
                renderSearchHistory(root);
            });

            // add item into root
            root.append(item);
        });
    }
}