const allaFonster = document.getElementsByClassName('.bildSamling');

allaFonster.forEach((fonster) => {
    fonster.addEventListener('hover', displayText(fonster));
});
//funktion för att visa text uppepå varje bild. Men vilken bild?
function displayText(fonster) {
    let textToDisplay = document.createElement('p');
    textToDisplay.innerHTML = 'Fönster med eller utan spröjs';
    textToDisplay.style.display='float';
    fonster.appendChild(textToDisplay);
    
}