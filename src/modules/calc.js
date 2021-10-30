const calc = () => {
    const getInput = document.querySelectorAll('.calc-block>input')

    getInput.forEach((index) => {
        index.addEventListener('input', (e) => {
            e.target.value = e.target.value.replace(/\D+/, '');
        })
    })

}

export default calc;