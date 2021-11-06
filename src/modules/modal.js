import { animate } from "./helpers";

const modal = () => {
    const modal = document.querySelector('.popup');
    const buttons = document.querySelectorAll('.popup-btn');

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const screenWidth = window.screen.width;
            modal.style.cssText = "display: block;";
            if (screenWidth >= '767') {
                animate({
                    duration: 1200,
                    timing(timeFraction) {
                        return 1 - Math.sin(Math.acos(timeFraction));
                    },
                    draw(progress) {
                        modal.style.cssText = "display: block;" + "opacity: 0;";
                        modal.style.opacity = progress * 100 + '%';
                    }
                  });
            }
        })
    })  

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.cssText = "display: none;";
        }
    })

}


export default modal;