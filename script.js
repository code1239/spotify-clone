const arrow = document.querySelector("nav ul li:last-child a");
console.log(arrow)
const profile = document.getElementById('profile')
const options = document.querySelector('.options')
const a = document.querySelectorAll('a')

profile.addEventListener('click', () => {
    options.classList.toggle('open')
    arrow.classList.toggle('open')
})


a.forEach(e => {
    e.addEventListener('click', (e) => {
        e.preventDefault()
    })
})