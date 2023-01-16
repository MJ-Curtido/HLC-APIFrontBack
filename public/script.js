let itLocality;
let btnSend;
let container;

function main() {
    itLocality = document.querySelector('#itLocality');
    btnSend = document.querySelector('#btnSend');
    container = document.querySelector('#container');

    btnSend.addEventListener('click', sendLocality);
}

function sendLocality() {
    
}

window.addEventListener('load', main);