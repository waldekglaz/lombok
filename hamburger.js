const nav = document.querySelector('nav');

document.querySelector('.hamburger').addEventListener('click', () => {
    nav.classList.add('active')
});
document.querySelector('.fa-times').addEventListener('click', () => {
    nav.classList.remove('active')
});