const slider = (a, b) => {
    if (a === '.portfolio-content' && b === '.portfolio-item') {
    const sliderBlock = document.querySelector(a);
    const slides = document.querySelectorAll(b);
    const portfolioDots = document.querySelector('.portfolio-dots')
    let dots = document.querySelectorAll('.dot');

    let timeInterval = 2000;
    let currentSlide = 0;
    let interval;

    for (let i = 0; i < slides.length; i++) {
        const newElement = document.createElement('li');
        newElement.classList.add('dot');
        if(i === 0) {newElement.classList.add('dot-active')}
        portfolioDots.append(newElement);
        dots = document.querySelectorAll('.dot');
    };
 
    const prevSlide = (elems, index, strClass) => {
        elems[index].classList.remove(strClass);
    }

    const nextSlide = (elems, index, strClass) => {
        elems[index].classList.add(strClass);
    }

    const autoSlider = () => {
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');
        currentSlide++;

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    }

    const startSlider = (timer = 1500) => {
        interval = setInterval(autoSlider, timer);
    }

    const stopSlider = () => {
        clearInterval(interval);
    }

    sliderBlock.addEventListener('click', (e) => {
        e.preventDefault();

        if (!e.target.matches('.dot, .portfolio-btn')) {
            return;
        }
        
        prevSlide(slides, currentSlide, 'portfolio-item-active');
        prevSlide(dots, currentSlide, 'dot-active');

        if (e.target.matches('#arrow-right')) {
            currentSlide++;
        } else if (e.target.matches('#arrow-left')) {
            currentSlide--;
        } else if (e.target.classList.contains('dot')) {
            dots.forEach((dot, index) => {
                if (e.target === dot) {
                    currentSlide = index;
                }
            })
        }

        if (currentSlide >= slides.length) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }

        nextSlide(slides, currentSlide, 'portfolio-item-active');
        nextSlide(dots, currentSlide, 'dot-active');
    })

    sliderBlock.addEventListener('mouseenter', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            stopSlider();
        }
    }, true)
    sliderBlock.addEventListener('mouseleave', (e) => {
        if (e.target.matches('.dot, .portfolio-btn')) {
            startSlider(timeInterval);
        }
    }, true)

    startSlider(timeInterval);

    } else {
        return;
    }
}


export default slider;