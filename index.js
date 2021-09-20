const menu = document.querySelector('.menu-mobile');
const burgerButton = document.querySelector('.burger');
const menuItems = [...document.querySelectorAll('.cv-list-mobile .link')];
const closeIcon = document.querySelector('.close-icon');

burgerButton.addEventListener('click', onBurgerClick);
closeIcon.addEventListener('click', onCloseClick);
menuItems.forEach(function(element){
    element.addEventListener('click', onCloseClick);
})

function onBurgerClick() {
    const isActive = menu.classList.contains('active');

    if (!isActive) { 
        menu.classList.add("active");
    } 
}

function onCloseClick() {
    const isActive = menu.classList.contains('active');
    if (isActive) { 
        menu.classList.remove("active");
    }
}

