const form = () => {
    const getInput = document.querySelectorAll('input')
    console.log(getInput);
    getInput.forEach(() => {
        getInput[0, 6, 10].addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^а-яА-Я\-\s]+/, '');
        })
        getInput[1, 7, 12].addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^a-zA-Z\s\-@-_.!~*']+/, '');
        })
        getInput[2, 8, 11].addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/[^0-9\-()]+/, '');
        })
    })
}

export default form;

