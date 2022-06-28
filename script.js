
let button = document.getElementById('button');
let inner = document.querySelector('.inner');
let body = document.getElementById('body');





button.addEventListener('click', () => {
    body.classList.toggle('dark')
    body.classList.toggle('darkNight')
    body.classList.toggle('dark-logo')
    body.classList.toggle('dark-back')
    
})

    

let menuBtn = document.querySelector('.outer-menu');
    let menuOpen = false;

    menuBtn.addEventListener('click', () => {
        if(!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
        } else {
            menuBtn.classList.remove('open');
            menuOpen = false;
        }
        
        body.classList.toggle('openMen');
    })
