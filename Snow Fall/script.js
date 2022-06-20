setInterval(snowFall, 20);

function snowFall() {
	
  	const snowDrop = document.createElement('p');
  
	snowDrop.innerText = '❄️';
	snowDrop.classList.add('fa-tint');
	snowDrop.style.left = Math.random() * window.innerWidth + 'px';
	snowDrop.style.animationDuration = Math.random() * 5 + 's';
	snowDrop.style.opacity = Math.random() + 0.4;
	// snowDrop.style.transform = `scale(${Math.random() * 0.5 + 0.5})`;
	snowDrop.style.transform = 'translate(' + Math.random() * window.innerWidth + 'px) scale(' + Math.random() * 2 + ')';
	snowDrop.style.width = Math.random() * 7 +'px';
	
	document.body.appendChild(snowDrop);
	
	setTimeout(() => {
		snowDrop.remove();
	}, 6000)
};