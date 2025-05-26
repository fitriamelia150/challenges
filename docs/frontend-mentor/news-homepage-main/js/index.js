const menuIcon = document.querySelector('#menuIcon');
const closeIcon = document.querySelector('#menuClose');
const menuLinks = document.querySelector('header nav');

menuIcon.addEventListener('click', ()=>{
	menuLinks.classList.add('open');
})

closeIcon.addEventListener('click', ()=>{
	menuLinks.classList.remove('open');
})
