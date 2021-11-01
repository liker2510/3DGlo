const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');

    function openOpacity() {
        modal.style.cssText = "display: block;" + "opacity: 0;";
        let opacity = 0;
        while (opacity <= 1) {
            (function (opacity) {
                setTimeout(function () { modal.style.opacity = opacity; }, 60 + opacity * 1000);
            })(opacity);
            opacity += 0.1;
        }
    }
    // function closeOpacity() {
    //     let opacity = 0;
    //     while (opacity >= 0) {
    //         (function (opacity) {
    //             setTimeout(function () { modal.style.opacity = opacity; }, 60 + opacity * 1000);
    //         })(opacity);
    //         opacity -= 0.1;
    //     }
    // }

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const screenWidth = window.screen.width;
            modal.style.cssText = "display: block;";
            if (screenWidth >= '767') {
                openOpacity();
            }
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.cssText = "display: none;";
            // closeOpacity();
        }
    })

}


export default modal;