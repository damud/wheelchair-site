const menu = document.querySelector('.top-menu--js');
menu.addEventListener('click', () => {
    const nav = document.querySelector('.navigation--js');
    nav.classList.toggle('navigation--open');
})