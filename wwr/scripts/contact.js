const form = document.getElementById("contactForm");

const overlay = document.getElementById("successOverlay");

const countdown = document.getElementById("countdown");


form.addEventListener("submit", function(event){

    event.preventDefault();

    overlay.classList.remove("hidden");

    let seconds = 10;

    countdown.textContent =
        `This window will close in ${seconds} seconds.`;

    const timer = setInterval(function(){

        seconds--;

        countdown.textContent =
            `This window will close in ${seconds} seconds.`;

        if(seconds <= 0){

            clearInterval(timer);

            overlay.classList.add("hidden");

            form.reset();

        }

    },1000);

});