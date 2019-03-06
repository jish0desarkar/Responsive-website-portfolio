//select DOM items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-brandning");
const navItems = document.querySelectorAll(".nav-itmes");

//set the Initial state of the menu

let showMenu  =  false;

//Listning event

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {

    if(!showMenu){

        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuBranding.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach( n => n.classList.add('show'));
        showMenu = true;
    }
    else{
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuBranding.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(n => n.classList.remove('show'));
        showMenu = false;

    }

}