let body = document.querySelector('body');
const colorEl = document.querySelector('#color');
const colorBtn = document.querySelector('#colorBtn');


function getColor() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = `rgb(${red}, ${green}, ${blue})`;
    body.style.backgroundColor = color;
    colorEl.innerHTML = color;
    
}

colorBtn.addEventListener('click', getColor);

