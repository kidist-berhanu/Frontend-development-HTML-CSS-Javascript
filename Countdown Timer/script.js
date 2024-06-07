// script.js
let countdownFunction;
let countdownActive = false;

document.getElementById('start-button').addEventListener('click', function() {
    if (!countdownActive) {
        // Set the date we're counting down to
        const countDownDate = new Date().getTime() + (24 * 60 * 60 * 1000); // 24 hours from now

        // Update the count down every 1 second
        countdownFunction = setInterval(function() {

            // Get today's date and time
            const now = new Date().getTime();

            // Find the distance between now and the count down date
            const distance = countDownDate - now;

            // Time calculations for days, hours, minutes and seconds
            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            // Output the result in an element with id="countdown"
            document.getElementById('days').innerHTML = days;
            document.getElementById('hours').innerHTML = hours;
            document.getElementById('minutes').innerHTML = minutes;
            document.getElementById('seconds').innerHTML = seconds;

            // If the count down is over, write some text 
            if (distance < 0) {
                clearInterval(countdownFunction);
                document.getElementById('countdown').innerHTML = "EXPIRED";
            }
        }, 1000);
        countdownActive = true;
    }
});

document.getElementById('stop-button').addEventListener('click', function() {
    if (countdownActive) {
        clearInterval(countdownFunction);
        countdownActive = false;
    }
});

document.getElementById('clear-button').addEventListener('click', function() {
    clearInterval(countdownFunction);
    document.getElementById('days').innerHTML = "00";
    document.getElementById('hours').innerHTML = "00";
    document.getElementById('minutes').innerHTML = "00";
    document.getElementById('seconds').innerHTML = "00";
    document.getElementById('countdown').innerHTML = "";
    countdownActive = false;
});
