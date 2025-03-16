// script.js
document.addEventListener("DOMContentLoaded", function () {
    console.log("JavaScript is linked and running!");

    // Example: Alert when clicking "Yes"
    document.querySelector(".yes-btn").addEventListener("click", function () {
        alert("Yay! ❤️");
    });

    // Example: Alert when clicking "No"
    document.querySelector(".no-btn").addEventListener("click", function () {
        alert("Oh no! 😢");
    });
});
