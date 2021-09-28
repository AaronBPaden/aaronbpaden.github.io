'use strict'

// On mobile, expand the about-text when pressing the arrow button.
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
