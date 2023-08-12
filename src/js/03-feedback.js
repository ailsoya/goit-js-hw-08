const throttle = require('lodash.throttle');
const input = document.querySelector('.feedback-form')

input.addEventListener('input', throttle(handlerForm, 500))
function handlerForm() {
    const {email, message} = input.elements

    const values = {
        email: email.value,
        message: message.value
    }

    localStorage.setItem('feedback-form-state', JSON.stringify(values))
    console.log('Поточні: ', values)
}

let currentVal = JSON.parse(localStorage.getItem('feedback-form-state'))

input.addEventListener("submit", function(event) {
    event.preventDefault()
    console.log('Відправлені: ', currentVal)
    localStorage.clear()
    event.currentTarget.reset();
});

if (localStorage.getItem('feedback-form-state')) {
    input.email.value = currentVal.email
    input.message.value = currentVal.message
}