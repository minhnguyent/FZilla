function toast({
    title = '',
    message = '',
    type = 'info',
    duration = 3000
}) {
    const main = document.querySelector('#toast');
    if (main) {
        const toast = document.createElement('div');

        const autoRemoveId = setTimeout(function() {
            main.removeChild(toast);
        }, duration + 1000);

        toast.onclick = function(e) {
            if (e.target.closest('.toast__close')) {
                main.removeChild(toast);
                clearTimeout(autoRemoveId);
            }
        }

        const icons = {
            success: 'fa-solid fa-circle-check',
            info: 'fa-solid fa-circle-info',
            warning: 'fa-solid fa-triangle-exclamation',
            error: 'fa-solid fa-circle-exclamation',
        }
        const icon = icons[type];
        const delay = (duration / 1000).toFixed(2);

        toast.classList.add('toast-message', `toast-message--${type}`);
        toast.style.animation = `slideInLeft ease .3s, fadeOut linear 1s ${delay}s forwards`;
        toast.innerHTML = `
        <div class="toast-message__icon">
            <i class="${icon}"></i>
        </div>
        <div class="toast__body">
            ${title ? `<h3 class="toast__title">${title}</h3>`: ''}
            <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
            <i class="fa-sharp fa-solid fa-xmark"></i>
        </div>
        `;
        main.appendChild(toast);
    }
}