function nextStep1() {
    setTimeout(() => {
        document.querySelector('#form-recovery_1').setAttribute('hidden', 'true');
        document.querySelector('#form-recovery_2').removeAttribute('hidden');
        
        let rpCodeIdentify = document.querySelector('.rp_code_identify');
        let time = document.querySelector('#countdown');
        
        rpCodeIdentify.addEventListener('click', function(event) {
            event.preventDefault();
            if (time.textContent !== '0') {
                toast({ title: 'Thông tin', message: 'Vui lòng chờ ' + time.textContent + 's để gửi lại mã xác nhận!' , type: 'info', duration: 3000 });
                console.log();
            } else {
                toast({ title: 'Thông tin', message: 'Email xác nhận đã được gửi lại!', type: 'info', duration: 3000 });
            }
        });

        let countdown = setInterval(() => {
            time.textContent = parseInt(time.innerHTML) - 1;
            if (time.innerHTML === '0') {
                clearInterval(countdown);
            }
        }, 1000);
    }, 1500);
}

function nextStep2() {
    setTimeout(() => {
        document.querySelector('#form-recovery_2').setAttribute('hidden', 'true');
        document.querySelector('#form-recovery_3').removeAttribute('hidden');
    }, 1500);
}