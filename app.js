const textEl = document.getElementById('text')
const contentEl = document.getElementById('content')

const text = 'Robbie Brennan';
const content = 'Junior Full Stack Developer';
let idx = 1;
let idxx  = 1;

writeText()

writeContent()

function writeText() {
    textEl.innerText = text.slice(0, idx)

    idx++


    setTimeout(writeText, 140)

}


function writeContent() {
    contentEl.innerText = content.slice(0, idxx)

    idxx++

    setTimeout(writeContent, 60);
}


const burger = document.querySelector('.hamburger');
const menu = document.querySelector('.burger-menu');

const line1 = document.querySelector('.line1')
const line2 = document.querySelector('.line2')
const line3 = document.querySelector('.line3')

const menuItems = document.querySelector('.burger-menu');


burger.addEventListener('click', function(){
    menu.classList.toggle('toggle');
    menu.classList.toggle('menu-effect');
    line1.classList.toggle('menu-line1')
    line2.classList.toggle('menu-line2')
    line3.classList.toggle('menu-line3')
});
