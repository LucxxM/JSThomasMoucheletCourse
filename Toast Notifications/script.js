const btn = document.querySelector('.btn');

let id = 0;

btn.addEventListener('click', () => {
    const toast = document.createElement('div');
    id++;
    const btnToast = document.createElement('button');
    const toastBox = document.querySelector('#toast-box');
    btnToast.innerHTML = 'X';
    toast.classList.add('toast');
    toast.innerHTML = `<p>Toast ${id}</p>`;
    toast.appendChild(btnToast);
    toastBox.appendChild(toast);
    btnToast.addEventListener('click', (e) => {
        toast.remove();
    });

    setTimeout(() => {
        toast.remove();
    }, 5000);
}   
);













