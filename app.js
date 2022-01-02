
const burger = document.querySelector('.burger')
const nav = document.querySelector('.nav-links')
const navlinks = document.querySelectorAll('.nav-links a')
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


const lines = ['Hello, my name is Subhashis.', 'I am a Web Developer.', 'I am a Web Designer.', 'I am a Competitive Programmer.']
let i = 0;
let timer

function typingeffect() {
    let characters = lines[i].split("")
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
    let characters = lines[i].split('')
    let loopdeleting = function () {
        if (characters.length > 0) {
            characters.pop()
            document.querySelector('.typewriter').innerHTML = characters.join('')
        }
        else {
            if (lines.length > (i + 1)) {
                i++;
                console.log(i)
            }
            else {
                i = 0
            }
            typingeffect()
            return false
        }
        timer = setTimeout(loopdeleting, 150);
    }
    loopdeleting();
}

typingeffect()

