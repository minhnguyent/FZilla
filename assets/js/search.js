const allSearchForm = document.querySelectorAll('.search-form');

if (allSearchForm) {
    allSearchForm.forEach(function(searchForm) {
        const searchInput = searchForm.querySelector('.search-form__input');
        const resetButton = searchForm.querySelector('.search-form__reset');
        const submitButton = searchForm.querySelector('.search-form__submit');
        const searchHistoryElement = searchForm.querySelector('.search-history');
    
        const searchRedirection = function() {
            if (searchInput.value === '') return;
            const searchQuery = searchInput.value;
            window.location.href = `./search.html?search_query=${searchQuery}`;
        }
    
        submitButton.addEventListener('click', function(event) {
            event.preventDefault();
            if (searchInput.value === '')
                return;
            
                if (typeof localStorage['searchHistory'] === 'undefined') {
                    let historyItemList = [
                        searchInput.value
                    ];
                    localStorage['searchHistory'] = JSON.stringify(historyItemList);
                } else {
                    let historyItemList = JSON.parse(localStorage['searchHistory']);
                    if (historyItemList.includes(searchInput.value) === false) {
                        historyItemList.unshift(searchInput.value);
                    }
                    localStorage['searchHistory'] = JSON.stringify(historyItemList);
                }
    
                searchRedirection(); 
        });
    
        const showHistory = function() {
            if (searchInput.value === '' && searchHistoryElement) {
                renderSearchHistory(searchHistoryElement);
                searchInput.classList.remove('rounded-1');
                searchInput.classList.add('search-form__input--expand');
            }
        }
    
        const hideHistory = function() {
            if (searchHistoryElement) {    
                searchHistoryElement.innerHTML = '';
                searchInput.classList.add('rounded-1');
                searchInput.classList.remove('search-form__input--expand');
            }
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
    
        searchForm.addEventListener('focusout', function(e) {
            const relatedTarget = e.relatedTarget;
            if (relatedTarget === null) {
                hideHistory();
                return;
            }
    
            if (relatedTarget.closest('.search-history-item__content')) {
                // click to item
                searchInput.value = relatedTarget.closest('.search-history-item__content').innerHTML;
                searchRedirection();
            }
            else if (relatedTarget.closest('.search-history-item__remove')) {
                // remove item
            }
            else if (relatedTarget.closest('.search-history-item')) {
                // click to item
                searchInput.value = relatedTarget.closest('.search-history-item')
                                    .querySelector('.search-history-item__content')
                                    .innerHTML;
                searchRedirection();
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
    
        function renderSearchHistory(root) {
            if (typeof localStorage['searchHistory'] === 'undefined') {
                root.innerHTML = '';
                return ;
            }
    
            // get history from localStorage
            let historyItemList = JSON.parse(localStorage['searchHistory']);
    
            root.innerHTML = '';
    
            historyItemList.forEach(function (value, key) {
                if (key > 2) return ;
    
                let item = document.createElement('div');
                item.classList.add('search-history-item');
                item.setAttribute('tabindex', '0');
    
                item.innerHTML =
                    `<p class="search-history-item__content" tabindex="0">${value}</p>
                    <span class="search-history-item__remove" tabindex="0"><i class="fa-solid fa-xmark"></i></span>`
    
                // add remove event
                item.querySelector('.search-history-item__remove').addEventListener('click', function () {
                    // remove this 
                    historyItemList.splice(key, 1);
    
                    if (historyItemList.length !== 0) {
                        localStorage['searchHistory'] = JSON.stringify(historyItemList);
                    } else {
                        localStorage.removeItem('searchHistory');
                        searchInput.classList.add('rounded-1');
                        searchInput.classList.remove('search-form__input--expand');
                    }
                    renderSearchHistory(root);
                    searchInput.focus();
                });
    
                // add item into root
                root.append(item);
            });
        }
    });
}