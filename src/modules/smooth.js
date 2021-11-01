const smooth = () => {
    const serviceBlock = document.getElementById('service-block');
    const a = document.querySelector('a');

    const scrollSmooth = () => {
        serviceBlock.scrollIntoView({ block: "center", behavior: "smooth" });
    }
    a.addEventListener('click', scrollSmooth);

}

export default smooth;