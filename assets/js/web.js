
const accordions = document.querySelectorAll('.accordion');
const btnabrirMobile = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#menu-mobile');


window.addEventListener('scroll', () => {
    const header = document.querySelector('#header');

    if(window.scrollY > 50) {
        header.classList.add('rolled');
    }else{
        header.classList.remove('rolled');
    }
});

accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
});

btnabrirMobile.addEventListener('click', () => {
    menuMobile.classList.add('abrir-menu')
});

menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu')
})