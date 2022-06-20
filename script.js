const liToHover = document.querySelectorAll('.li-to-hover');
const h1ToChange = document.querySelector('#h1ToChange');
const body = document.querySelector('body');

liToHover.forEach(li => {
    li.addEventListener('mouseover', () => {
        h1ToChange.style.color = 'white';
        body.style.backgroundColor = 'black';
    }
    );
    li.addEventListener('mouseout', () => {
        body.style.backgroundColor = 'rgb(48, 48, 48)';
        h1ToChange.style.color = 'aqua';
    }
    );
});
