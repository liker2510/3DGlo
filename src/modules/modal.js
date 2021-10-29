const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');
    const closeBtn = modal.querySelector('.popup-close');

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

    closeBtn.addEventListener('click', () => {
        modal.style.cssText = "display: none;";
        // closeOpacity();
    })
}


export default modal;