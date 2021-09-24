'use strict'

// On mobile, expand the about-text when pressing the arrow button.
document.querySelector("#aboutButton").addEventListener("click", () => {
    let aboutBox = document.querySelector("#aboutBox");
    let aboutButton = document.querySelector("#aboutButton");
    let aboutText = document.querySelector("#aboutText");
    aboutText.style.visibility = getComputedStyle(aboutText).visibility === "hidden" ? "visible" : "hidden";
    aboutButton.textContent = aboutButton.textContent === "↑" ? "↓" : "↑";

    // CSS transitions require a static height, so we need to calculate it.
    let expandedHeight = aboutText.clientHeight + aboutBox.clientHeight;

    // It seems the style property only keeps track of inline styles, so we need to check for an
    // empty style as well.
    aboutBox.style.height = aboutBox.style.height === "" ? expandedHeight + "px"
        : aboutBox.style.height === "15vh" ? expandedHeight + "px"
        : "15vh";
});
