/*const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", expandMenu);

function expandMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");\drip\index.html
}


const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");
*/


const roofWidth = document.getElementById("roofWidth");
const roofLength = document.getElementById("roofLength");
const rainfall = document.getElementById("rainfall");
const gutterLength = document.getElementById("gutterLength");
const outputText = document.getElementById('outputText');
const form1 = document.getElementById('form1');
const submitBtn = document.getElementById("submitBtn");

function gutterCalc() {
    event.preventDefault();
    outputText.innerHTML = (roofWidth.value * roofLength.value) + " inches squared";
}

submitBtn.addEventListener('click', gutterCalc);
