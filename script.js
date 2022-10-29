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
const outputText = +document.getElementById('outputText');
const form1 = document.getElementById('form1');
const submitBtn = document.getElementById("submitBtn");
const drainedArea = roofWidth * roofLength;
const ratioM = .75;
//let gutterWidth = 0.016 * (Math.pow(ratioM, (-4 / 7))) * Math.pow(gutterLength.value, (3 / 28)) * Math.pow((rainfall.value * drainedArea), (5 / 14));
const gutterWidth = roofWidth;

function gutterCalc() {
    //event.preventDefault();
    outputText.innerHTML = 5;
}

submitBtn.addEventListener('click', gutterCalc);

// Gutter Calculator
// https://www.metalsales.us.com/wp-content/uploads/2020/01/1b-general-information-pm-2018.pdf