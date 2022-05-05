const hamburgerIcon = document.getElementById('hamburger-icon');
const crossIcon = document.getElementById('cross-icon');
const dropdownMenu = document.getElementById('dropdown-menu');
const navbar = document.getElementById('nav');
const scrollBtn = document.getElementById('scroll-btn');
const navAfter = document.getElementById('navAfter');

window.rese

window.onscroll = () => {
    let rect = navbar.getBoundingClientRect();

    if(window.scrollY>rect.height) {
        scrollBtn.style.display = 'block';
        navbar.style.position = 'fixed';
        navAfter.style.backgroundColor = '#fff';
        navbar.style.backgroundColor = '#fff';
        navbar.style.boxShadow = '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'
    }
    else {
        scrollBtn.style.display = 'none';
        navbar.style.position = 'static';
        navAfter.style.backgroundColor = 'transparent';
        navbar.style.backgroundColor = 'transparent';
        navbar.style.boxShadow = 'none'
    }
}

const toggleDropdown = () => {
    dropdownMenu.classList.toggle('h-[12.5rem]')
    hamburgerIcon.classList.toggle('hidden');
    crossIcon.classList.toggle('hidden');
}

scrollBtn.addEventListener('click', () => {
    document.documentElement.scrollTop = 0;
})