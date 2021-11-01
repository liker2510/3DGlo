const menu = () => {
    const menu = document.querySelector('menu');
    const body = document.querySelector('body');

    const handleMenu = () => {
        menu.classList.toggle('active-menu');
    }

    body.addEventListener('click', (e) => {
        if (e.target.closest('.menu')) {
            handleMenu();
        } else if (e.target.closest('.close-btn') || e.target.matches('menu>ul>li>a')) {
            handleMenu();
        } else if (!e.target.matches('menu')) {
            menu.classList.remove('active-menu');
        }

    })
}

export default menu;