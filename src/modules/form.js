const form = () => {
    const form1Name = document.getElementById('form1-name');
    const form1Email = document.getElementById('form1-email');
    const form1Phone = document.getElementById('form1-phone');
    const form2Name = document.getElementById('form2-name');
    const form2Email = document.getElementById('form2-email');
    const form2Phone = document.getElementById('form2-phone');
    const form3Name = document.getElementById('form3-name');
    const form3Email = document.getElementById('form3-email');
    const form3Phone = document.getElementById('form3-phone');

    form1Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, '');
    })
    form1Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s\-@-_.!~*']+/, '');
    })
    form1Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\-()]+/, '');
    })
    form2Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, '');
    })
    form2Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s\-@-_.!~*']+/, '');
    })
    form2Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\-()]+/, '');
    })
    form3Name.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, '');
    })
    form3Email.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^a-zA-Z\s\-@-_.!~*']+/, '');
    })
    form3Phone.addEventListener('input', (e) => {
        e.target.value = e.target.value.replace(/[^0-9\-()]+/, '');
    })
}

export default form;

