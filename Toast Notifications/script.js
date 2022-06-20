const btn = document.querySelector('.btn');

let id = 0;

btn.addEventListener('click', () => {
    const toast = document.createElement('div');
    const btnToast = document.createElement('button');
    const toastBox = document.querySelector('#toast-box');
    id++;
    btnToast.innerHTML = 'X';
    toast.classList.add('toast');
    toast.innerHTML = `<p>Toast ${id}</p>`;
    toast.appendChild(btnToast);
    toastBox.appendChild(toast);
    btnToast.addEventListener('click', () => {
        setTimeout(() => {
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => {
                toast.remove();
            }, 1000);
        }, 100);
    });
    
    setTimeout(() => {
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => {
            toast.remove();
        }, 1000);
    }, 5000);
}   
);




