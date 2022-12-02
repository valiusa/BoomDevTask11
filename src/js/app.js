//import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
    // This block will be executed once the page is loaded and ready
    setTimeout(function () {
        document.title = "One new message";
    }, 3000);

    const button = document.querySelector(".button");
    button.addEventListener("click", () => {
        alert("💣");
    });
});
