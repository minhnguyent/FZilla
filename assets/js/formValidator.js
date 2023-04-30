// Expected
const Validator = (options) => {
    const selectorRules = {};
    const form = document.querySelector(options.form);

    const setValid = (inputElement) => {
        const formGroup = inputElement.closest(options.formGroup);
        const formMessage = formGroup.querySelector(options.formMessage);
        formGroup.classList.remove('invalid');
        formMessage.innerHTML = '';
    }

    const setInvalid = (inputElement, errorMessage = '') => {
        const formGroup = inputElement.closest(options.formGroup);
        const formMessage = formGroup.querySelector(options.formMessage);
        if (formGroup.classList.contains('invalid')) {
            // formGroup is already invalid.
            return;
        }
        formGroup.classList.add('invalid');
        formMessage.innerHTML = errorMessage;
    }

    const validate = (selector) => {
        const inputElement = form.querySelector(selector);
        let errorMessage = '';

        for (const test of selectorRules[selector]) {
            switch (inputElement.type) {
                case 'radio':
                case 'checkbox':
                    const checkedElement = form.querySelector(selector + ':checked');
                    errorMessage = test(checkedElement);
                    break;
                default: // text select file
                    errorMessage = test(inputElement.value);
            }
            if (errorMessage) break;
        }
        if (errorMessage) {
            setInvalid(inputElement, errorMessage);
        }
        else {
            setValid(inputElement);
        }
        // return true if input is valid, otherwise return false.
        return (errorMessage ? false : true);
    }

    if (form) {
        options.rules.forEach((rule) => {
            if (Array.isArray(selectorRules[rule.selector])) {
                selectorRules[rule.selector].push(rule.test);
            }
            else {
                selectorRules[rule.selector] = [rule.test];
            }
        });

        // handling when user blur or typing
        for (const selector in selectorRules) {
            const inputElements = form.querySelectorAll(selector);
            Array.from(inputElements).forEach((inputElement) => {

                // inputElement.onblur = () => {
                //     validate(selector);
                // }

                inputElement.oninput = () => {
                    setValid(inputElement);
                }
            });
        }

        // handling when user click register button
        form.onsubmit = (e) => {
            e.preventDefault();
            let isValidForm = true;
            for (const selector in selectorRules) {
                const inputElement = form.querySelector(selector);
                if (inputElement) {
                    if (!validate(selector)) {
                        isValidForm = false;
                    }
                }
            }
            const passwordRepeatElement = document.querySelector('#password-repeat');
            if (passwordRepeatElement) {
                const passwordElement = document.querySelector('#password');
                if (
                    passwordRepeatElement.value &&
                    passwordElement.value &&
                    passwordRepeatElement.value !== passwordElement.value
                ) {
                    setInvalid(passwordRepeatElement, 'Mật khẩu bạn nhập không khớp');
                    isValidForm = false;
                }
            }
            if (!isValidForm) {
                console.log('Form values is invalid');
            }
            else {
                if (typeof options.handleFormOnSubmit === 'function') {
                    const inputElements = form.querySelectorAll('[name]:not([disabled])');
                    console.log()
                    const formValues = Array.from(inputElements).reduce((output, inputElement) => {
                        switch (inputElement.type) {
                            case 'radio':
                                if (inputElement.checked) {
                                    output[inputElement.name] = inputElement.value;
                                }
                                break;
                            case 'checkbox':
                                if (!output[inputElement.name]) {
                                    output[inputElement.name] = [];
                                }
                                if (inputElement.checked) {
                                    output[inputElement.name].push(inputElement.value);                                       
                                }
                                break;
                            case 'file': 
                                output[inputElement.name] = inputElement.files;
                                break;
                            default:
                                output[inputElement.name] = inputElement.value;
                        }
                        return output;
                    }, {});

                    options.handleFormOnSubmit(formValues);
                }
                else {
                    // call default browser method.
                    form.submit();
                }
            }
        }
    }
}   

Validator.require = (selector, errorMessage, isTrim = false) => {
    return {
        selector,
        test(input) {
            if (isTrim && typeof input === 'string') input = input.trim();
            return (input ? undefined : errorMessage || 'Vui lòng nhập trường này');
        }
    };
}

Validator.isEmail = (selector, errorMessage) => {
    return {
        selector,
        test(email) {
            const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return (regex.test(email) ? undefined : errorMessage || 'Email không hợp lệ');
        }
    };
}

Validator.requireMinLength = (selector, minLength = 6, errorMessage) => {
    return {
        selector,
        test(password) {
            return (password.length >= minLength ? undefined :
                errorMessage || `Vui lòng nhập ít nhất ${minLength} kí tự`);
        }
    };
}