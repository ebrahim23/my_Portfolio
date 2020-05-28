const icon = document.querySelector('.menu-icon');
const nav = document.querySelector('.sub-menu');
const ul = document.querySelector('.sub-menu ul');

let menuState = false;

icon.addEventListener('click', toggle);

function toggle(){
    if(!menuState){
        icon.classList.add('close');
        nav.classList.add('show');

        menuState = true;
    } else{
        icon.classList.remove('close');
        nav.classList.remove('show');

        menuState = false;
    }
}