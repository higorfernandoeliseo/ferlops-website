const accordions = document.querySelectorAll('.accordion');
const btnAbriMobile = document.querySelector('#btn-menu-mobile');
const menuMobile = document.querySelector('#menu-mobile');

var modoAtual = "random";

const randomSamples = [
    '&tC)8vW[HEJ6V_Si2EA/',
    'Wu>TB<m>edqfCX:E4NPD',
    'bfM:1T%zaQUpFhbK{4H]'
];

const PhaseSamples = [
    'Animal6-Terra9-Mania0',
    'Linux-Computer-Bold',
    'Windows8-Media2-Native0'
];

const generateSample = () => {
    let opcao;

    if (modoAtual === "random") {
        opcao = randomSamples;
    }else{
        opcao = PhaseSamples;
    }

    const indice = Math.floor(Math.random() * opcao.length);
    const output_sample = document.querySelector('.inputbox-password-output');
    output_sample.textContent = opcao[indice];
}

const selecionaModo = (modo) => {
    modoAtual = modo;
    document.querySelector('#btnAleatorio').classList.toggle('active', modo == "random");
    document.querySelector('#btnPassPhase').classList.toggle('active', modo == "phase");
    generateSample();
}

accordions.forEach((accordion) => {
    accordion.addEventListener('click', () => {
        const body = accordion.querySelector('.accordion-body');
        body.classList.toggle('active');
    })
});

btnAbriMobile.addEventListener('click', () => {
    menuMobile.classList.add('abrir-menu');
});

menuMobile.addEventListener('click', () => {
    menuMobile.classList.remove('abrir-menu');
});

document.querySelector('#btnAleatorio').onclick = () => {
    selecionaModo('random');
}

document.querySelector('#btnPassPhase').onclick = () => {
    selecionaModo('phase');
}

document.querySelector('#btnGerar').onclick = () => {
    generateSample();
}