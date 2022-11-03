/* <<< THIS IS THE HAMBURGER EFFECT >>> */

const navMenu = document.getElementById("nav-menu");
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener('click', function () {
    const result1 = hamburger.classList.toggle("active");
    const result2 = navMenu.classList.toggle("active");
});


/* <<< THIS IS THE GUTTER CALCULATION >>> */

const roofWidth = document.getElementById("roofWidth");
const roofLength = document.getElementById("roofLength");
const rainfall = document.getElementById("rainfall");
const gutterLength = document.getElementById("gutterLength");
const outputText1 = document.getElementById('outputText1');
const outputText2 = document.getElementById('outputText2')
const form1 = document.getElementById('form1');
const submitBtn = document.getElementById("submitBtn");
const drainedArea = roofWidth.value * roofLength.value;
const ratioM = document.getElementById("ratioM");
const gutterWidth = 0.016 * (Math.pow(ratioM.value, (-4 / 7))) * Math.pow(gutterLength.value, (3 / 28)) * Math.pow((rainfall.value * (roofWidth.value * roofLength.value)), (5 / 14));

submitBtn.addEventListener('click', function gutterCalc() {
    const gutterWidth = (0.016 * (Math.pow(ratioM.value, (-4 / 7))) * Math.pow(gutterLength.value, (3 / 28)) * Math.pow((rainfall.value * (roofWidth.value * roofLength.value)), (5 / 14)));

    outputText1.innerHTML = "Gutter Width: " + gutterWidth + '"';
    outputText2.innerHTML = "Gutter Depth: " + Math.ceil(gutterWidth * ratioM.value) + '"';
    preventDefault();
});

// Gutter Calculator
// https://www.metalsales.us.com/wp-content/uploads/2020/01/1b-general-information-pm-2018.pdf
