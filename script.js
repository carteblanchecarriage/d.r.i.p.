const roofWidth = document.getElementById('roofWidth').value;
const length = document.getElementById('length');
const output1 = document.getElementById('output1');
const subBtn = document.getElementById('submitBtn');

function area() {
    output1.innerHTML = roofWidth.value;
}

subBtn.addEventListener("click", area);
