
const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav-links')
const navlinks = document.querySelectorAll('.nav-links li')
const typewriters = document.querySelectorAll('.typewriter')

burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active')

    navlinks.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = ''
        }
        else {
            link.style.animation = `navlinkfade 0.5s ease forwards ${index / 5 + 1}s`
        }
    })
    burger.classList.toggle('toggle')
})

// const lines = ['Hello, I am Subhashis.','I am a web developer','I am a quantum computing enthusiast','I am a competitive coder']

const line = 'Hello, I am Subhashis.'
let timer

function typingeffect() {
    let characters = line.split("")
    let looptyping = function () {
        if (characters.length > 0) {
            document.querySelector('.typewriter').innerHTML += characters.shift()
        }
        else {
            deletingeffect();
            return false;
        }
        timer = setTimeout(looptyping, 400)
    }
    looptyping();
}

function deletingeffect() {
    let characters = line.split('')
    let loopdeleting = function () {
        if (characters.length > 0) {
            characters.pop()
            document.querySelector('.typewriter').innerHTML = characters.join('')
        }
        else {
            typingeffect()
            return false
        }
        timer = setTimeout(loopdeleting, 150);
    }
    loopdeleting();
}

typingeffect()

