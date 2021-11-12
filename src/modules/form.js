const form = () => {
    const getInput = document.querySelectorAll('.calc-block>input');
    const getUserEmail = document.querySelectorAll('input[name=user_email]');

    getUserEmail.forEach((index) => {
        index.setAttribute("required", true);
    })

    getInput.forEach((index) => {
        index.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, '');
        })
    })

    document.body.addEventListener('input', (e) => {
        if (e.target.name === "user_name") {
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, '');
        } else if (e.target.name === "user_email") {
            e.target.value = e.target.value.replace(/[^a-zA-Z\s\-@-_.!~*']+/, '')
        } else if (e.target.name === "user_phone") {
            e.target.value = e.target.value.replace(/[^0-9\\+]+/, '');
        } else if (e.target.name === "user_message") {
            e.target.value = e.target.value.replace(/[^.,\/#!$%\^&\*;:{}=\-_`~()а-яА-Я0-9\s]+/, '');
        }
    })
}

export default form;

