let menu = document.querySelector('#menu');
let navbar = document.querySelector('.navbar');
let header = document.querySelector('header');

menu.addEventListener('click', () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toggle');
    header.classList.toggle('header-toggle');
});

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toggle');
    header.classList.remove('header-toggle')
}
