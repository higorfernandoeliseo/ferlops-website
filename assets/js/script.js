const accordions = document.querySelectorAll('.accordion');
const btnMobile = document.querySelector('#btn-mobile');
const dropdownBtn = document.querySelector('.dropdown-btn');
const dropdownMenu = document.querySelector('.dropdown-menu');
const items = document.querySelectorAll('.item');
const selectedItem = document.getElementById('selected-item')

let downloadActive = ''

function toggleMenu(event) {
    if(event.type === 'touchstart') event.preventDefault();
    const nav = document.querySelector('#nav');
    nav.classList.toggle('active');
    const active = nav.classList.contains('active');

    event.currentTarget.setAttribute('aria-expanded', active);
    if(active) {
        event.currentTarget.setAttribute('aria-label','Fechar menu')
    }else{
        event.currentTarget.setAttribute('aria-label','Abrir menu')
    }
}


accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
})

dropdownBtn.addEventListener('click', e => {
    e.stopPropagation()
    toggleBtn();
})

items.forEach((item) => item.addEventListener('click', itemClickHandler))

function toggleBtn() {
    dropdownMenu.classList.toggle('open');
}

function closeMenu() {
    dropdownMenu.classList.remove('open');
}

function itemClickHandler(e) {
    e.stopPropagation()
    selectedItem.innerText = e.target.innerText

    if(selectedItem.innerText === 'Windows x64'){
        console.log('ele selecionou para Windows');
    }else if(selectedItem.innerText === 'Linux'){
        console.log('ele selecionou para Linux');
    }else{
        console.log('ele selecionou para mac os!');
    }

    items.forEach((item) => item.classList.remove('active'))

    e.target.classList.add('active')
    closeMenu()
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu)
//dropdownBtn.addEventListener('click', toggleBtn)