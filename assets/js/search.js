const searchForm = document.querySelector('.search-form');

// test history
const historyItemList = {
    history: [
        'Lorem ipsum dolor sit amet consectetur.',
        'Lorem ipsum dolor sit amet consectetur.',
        'Lorem ipsum dolor sit amet consectetur.',
        'Lorem ipsum dolor sit amet consectetur.'
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

    // Show and hide resetButton
    searchInput.addEventListener('keyup', function () {
        if (searchInput.value.length !== 0) {
            resetButton.classList.remove('hidden');
        } else {
            resetButton.classList.add('hidden');
        }
    });

    resetButton.addEventListener('click', function () {
        this.classList.add('hidden');
    });


    // Show search history
    searchInput.addEventListener('focus', function () {
        if (typeof localStorage['searchHistory'] !== 'undefined') {
            renderSearchHistory(searchHistoryElement);
            searchInput.classList.remove('rounded-1');
            searchInput.classList.add('search-form__input--expand');
        }
    });

    /*****************************************************************
    TODO: focus out form ------------------------------------
    searchForm.addEventListener('focusout', function() {
        searchHistoryElement.innerHTML = '';
        searchInput.classList.add('rounded-1');
        searchInput.classList.remove('search-form__input--expand');
    });
    *****************************************************************/

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

            item.innerHTML =
                `<p class="search-history-item__content">
                    ${value}
                </p>
                <i class="search-history-item__remove fa-solid fa-xmark"></i>`

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