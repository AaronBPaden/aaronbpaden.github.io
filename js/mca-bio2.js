'use strict'

// On mobile, expand the about-text when pressing the arrow button.
let aboutButton = document.querySelector("#aboutButton");
if (aboutButton) {
    document.querySelector("#aboutButton").addEventListener("click", () => {
        let aboutBox = document.querySelector("#aboutBox");
        let aboutButton = document.querySelector("#aboutButton");
        let aboutText = document.querySelector("#aboutText");
        aboutText.style.visibility = getComputedStyle(aboutText).visibility === "hidden" ? "visible" : "hidden";
        aboutButton.textContent = aboutButton.textContent === "↑" ? "↓" : "↑";

        // It seems the style property only keeps track of inline styles, so we need to check for an
        // empty style as well.
        aboutBox.style.height = aboutBox.style.height === "" ? aboutBox.scrollHeight + "px"
            : aboutBox.style.height === "15vh" ? aboutBox.scrollHeight + "px"
            : "15vh";
    });
}

if (document.querySelector('#certCarousel')) {
    // AFAICT, slick requires you to use JQuery here.
    $('#certCarousel').slick({
        prevArrow: '<button class="slick-prev btn" id="prevArrow">←</button>',
        nextArrow: '<button class="slick-next btn" id="nextArrow">→</button>'
    });
}
