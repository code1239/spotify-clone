const arrow = document.querySelector("nav ul li:last-child a");
console.log(arrow)
const profile = document.getElementById('profile')
const options = document.querySelector('.options')
const a = document.querySelectorAll('a')
const hamburger = document.querySelector('.hamburger')
const mobileMenu = document.querySelector('.mobile-menu')
const body = document.querySelector('body')
profile.addEventListener('click', () => {
    options.classList.toggle('open')
    arrow.classList.toggle('open')
})

hamburger.addEventListener('click', () => 
{
    body.classList.toggle('stop-scrolling')
mobileMenu.classList.toggle('disabled')
if(hamburger.innerHTML === '<i class="fas fa-times"></i>')
hamburger.innerHTML ='<i class="fas fa-bars"></i>'
else hamburger.innerHTML ='<i class="fas fa-times"></i>'
})

a.forEach(e => {
    e.addEventListener('click', (e) => {
        e.preventDefault()
    })
})