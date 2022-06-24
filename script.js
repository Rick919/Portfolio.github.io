
let button = document.getElementById('button');
let inner = document.querySelector('.inner');
let body = document.getElementById('body');

button.addEventListener('click', () => {
    body.classList.toggle('dark')
    body.classList.toggle('darkNight')
    body.classList.toggle('dark-logo')
    
})