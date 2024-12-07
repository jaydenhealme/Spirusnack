
let lastScrollY = 0
const navbar = document.querySelector('nav')
window.addEventListener('scroll', () =>{
    const currentScrollY = window.scrollY
    if (currentScrollY > window.scrollY){
        console.log('scroll Down')
        navbar.classList.add('hidden')
    }else{
        console.log('scroll Up')
        navbar.classList.remove('hidden')
    }
    lastScrollY = currentScrollY
})