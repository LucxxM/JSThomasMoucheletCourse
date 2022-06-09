// const darkMode = document.getElementById('dark-mode');

// darkMode.addEventListener('change', () => {
//   document.body.classList.toggle('dark');
// });


const darkMode2 = document.getElementById('dark-mode2');
const body = document.querySelector('body');
const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const ball = document.querySelector('.ball');
const main = document.querySelector('main');
const label = document.querySelector('label');
const img = document.querySelector('.img');

darkMode2.addEventListener('change', () => {

  if (darkMode2.checked) {
  body.style.backgroundColor = '#333';
  h1.style.color = '#fff';
  p.style.color  = '#fff';
  ball.style.backgroundColor = 'blue';
  main.style.backgroundColor = 'blue';
  label.style.boxShadow = '2px 1px 1px blue';
  label.style.color = '#fff';
  img.style.backgroundImage = `url("https://images.unsplash.com/photo-1654447398783-3588bae7b55b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxOHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60")`;
  } else {
  body.style.backgroundColor = '#fff';
  h1.style.color = '#000';
  p.style.color  = '#000';
  ball.style.backgroundColor = 'rgb(171, 150, 230)';
  main.style.backgroundColor = 'rgb(171, 150, 230)';
  label.style.boxShadow = '2px 1px 1px rgb(171, 150, 230)';
  img.style.backgroundImage = `url("https://images.unsplash.com/photo-1533579263828-9f24d05acd87?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80")`;
  }
});


