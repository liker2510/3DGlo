const timer = (deadline) => {
    const timerHours = document.querySelector('#timer-hours');
    const timerMinutes = document.getElementById('timer-minutes');
    const timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaning = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemaining = (dateStop - dateNow) / 1000;
        // let days = Math.floor(timeRemaining / 60 / 60 / 24);
        // let hours = Math.floor((timeRemaining / 60 / 60) % 24);
        let hours = Math.floor(timeRemaining / 60 / 60);
        let minutes = Math.floor((timeRemaining / 60) % 60);
        let seconds = Math.floor(timeRemaining % 60);

        return { timeRemaining, hours, minutes, seconds }

    }
    const zero = (x) => {
        if (x > 0 && x < 10) { 
            return '0' + x;
        } else {
            return x;
        }
    }

    const updateClock = () => {
        let getTime = getTimeRemaning();
        timerHours.textContent = zero(getTime.hours);
        timerMinutes.textContent = zero(getTime.minutes);
        timerSeconds.textContent = zero(getTime.seconds);

        if (getTime.timeRemaining < 0) {
            clearInterval(idInterval);
            timerHours.textContent = "00";
            timerMinutes.textContent = "00";
            timerSeconds.textContent = "00";
        }
    }
    let idInterval = setInterval(() => {
    updateClock()
    }, 1000);
}

export default timer