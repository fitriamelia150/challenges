const toggle = document.querySelector('#btn-toggle');
const circleToggle = document.querySelector('#toggle-circle');
const html = document.querySelector('html');

toggle.addEventListener('click', ()=>{
    if(html.className === 'dark'){
        html.classList.remove('dark');
        circleToggle.style.transform = 'translateX(-1%)';
    }else{
        html.classList.add('dark');
        circleToggle.style.transform = 'translateX(-119%)';
    }
})