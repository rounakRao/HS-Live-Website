const menu=document.querySelector('#mobile_menu');
const menuLinks=document.querySelector('.navbar_menu');

const mobilemenu=() =>{
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
}

menu.addEventListener('click', mobilemenu);
