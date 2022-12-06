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
let outputText1 = document.getElementById('outputText1');
let outputText2 = document.getElementById('outputText2')
const form1 = document.getElementById('form1');
const submitBtn = document.getElementById("submitBtn");
const clrBtn = document.getElementById("clrBtn");
const drainedArea = roofWidth.value * roofLength.value;
const ratioM = document.getElementById("ratioM");
const gutterWidth = 0.016 * (Math.pow(ratioM.value, (-4 / 7))) * Math.pow(gutterLength.value, (3 / 28)) * Math.pow((rainfall.value * (roofWidth.value * roofLength.value)), (5 / 14));

const imperial = document.getElementById("imperial");
const metric = document.getElementById("metric");

submitBtn.addEventListener('click', function gutterCalc() {
    const gutterWidth = 12 * 0.0106 * Math.pow(ratioM.value, -(4 / 7)) * Math.pow(gutterLength.value, (3 / 28)) * Math.pow((rainfall.value * (roofWidth.value * roofLength.value)), (5 / 14));
    if (imperial.checked) {
        outputText1.innerHTML = `Gutter Width: ${Math.ceil(gutterWidth)} cm`;
        outputText2.innerHTML = `Gutter Depth: ${Math.ceil(gutterWidth * ratioM.value)} cm`;
        form1.preventDefault();
    } else if (metric.checked) {
        outputText1.innerHTML = `Gutter Width: ${Math.ceil(gutterWidth * 2.54)} cm`;
        outputText2.innerHTML = `Gutter Depth: ${Math.ceil(gutterWidth * ratioM.value * 2.54)} cm`;
        form1.preventDefault();
    }
});

clrBtn.addEventListener('click', function () {
    outputText1.innerHTML = 'Gutter Width: X"';
    outputText2.innerHTML = 'Gutter Depth: X"';
})

// SHOW SLIDER VALUES
document.getElementById("gutterRatio").innerHTML = ratioM.value;

ratioM.onchange = function () {
    document.getElementById("gutterRatio").innerHTML = ratioM.value;
}

// RAINFALL BY CITY
const outputRainSelect = document.getElementById("outputRainSelect");

rainfall.onchange = function () {
    outputRainSelect.innerHTML = rainfall.value;
}

/* <<< THIS IS FOR SOUND CONTROL >>> */
let soundIcon = document.getElementsByClassName("soundIcon");

soundIcon[0].addEventListener('click', function () {
    //soundIcon[0].style.backgroundColor = 'red';
    // soundIcon[0].classList.toggle("soundIconOn");
    soundIcon[0].toggleClass("soundIconOn").toggleClass("soundIconOff");
})



// Gutter Calculation
// https://www.metalsales.us.com/wp-content/uploads/2020/01/1b-general-information-pm-2018.pdf
