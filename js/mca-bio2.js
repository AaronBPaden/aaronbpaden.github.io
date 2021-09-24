'use strict'
document.querySelector("#aboutButton").addEventListener("click", () => {
    let aboutBox = document.querySelector("#aboutBox");
    let aboutButton = document.querySelector("#aboutButton");
    let aboutText = document.querySelector("#aboutText");
    aboutText.style.display = getComputedStyle(aboutText).display === "none" ? "block" : "none";
    aboutButton.textContent = aboutButton.textContent === "↑" ? "↓" : "↑";
    // It seems the style property only keeps track of inline styles, so we need to check for an
    // empty style as well.
    aboutBox.style.height = aboutBox.style.height === "" ? "100%"
        : aboutBox.style.height === "15vh" ? "100%"
        : "15vh";
});
