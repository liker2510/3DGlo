const form = () => {

    document.body.addEventListener('input', (e) => {
        if(e.target.name === "user_name") {
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, '');
        } else if(e.target.name === "user_email") {
            e.target.value = e.target.value.replace(/[^a-zA-Z\s\-@-_.!~*']+/, '');
        } else if(e.target.name === "user_phone") {
            e.target.value = e.target.value.replace(/[^0-9\-()]+/, '');
        } else if(e.target.name === "user_message") {
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, '');
        }
    })
}

export default form;