const form = document.getElementById("newsletterForm");
const overlay = document.getElementById("newsletterOverlay");

form.addEventListener("submit", function (e) {

    e.preventDefault();

    overlay.classList.remove("hidden");

    setTimeout(function () {

        overlay.classList.add("hidden");
        form.reset();

    }, 5000);

});