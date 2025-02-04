
const eyeH = document.getElementById('eye')
let toggle = false
let scrollToggle = false
let countdown = 0




window.onload = async function () {
    const logos = document.getElementById('logo')
    const timeline = anime.timeline({
        targets: '#logo',
        duration: 500,
        easing : "easeOutExpo"
    })
    timeline.add({
        scale: 0,
        easing : "easeOutExpo"
    })
    .add({
        scale: 1,
        easing : "easeOutExpo"
    })
    await delay(500)
    logos.src = "imgs/EyeLogo.png"
}


window.addEventListener('scroll', function() {
    const header = document.getElementById("meuHeader")

    if (window.scrollY > 10) {
        header.classList.add("scrolled")

        const div = document.getElementById("LandBnr")
        const scrollMax = 300
        const maxAltura = 100 // Altura máxima da div
        const minAltura = 30;

        let scrollTop = Math.min(window.scrollY, scrollMax);
        let novaAltura = Math.floor(maxAltura - ((scrollTop / scrollMax) * (maxAltura-minAltura)))

        div.style.height = novaAltura + "vh"
    }
    else {
        header.classList.remove("scrolled")
        const div = document.getElementById("LandBnr")
        div.style.height = "100vh"
    }
})

document.getElementById("svg-1").addEventListener("mouseenter", function (){
    const svg = document.getElementById("svg-1")
    svg.classList.add("hovered")
})
document.getElementById("svg-1").addEventListener("click", function (){
    countdown++
    console.log(countdown)
    if (countdown >= 50) {
        window.location.href = "ola.html"
    }
})

function learnIn(){
    const aut = document.getElementById("know")
    aut.classList.add("hovered") 
    document.getElementById("autAnim").classList.add("hovered")
}
function learnOut(){
    const aut = document.getElementById("know")
    aut.classList.remove("hovered")
    document.getElementById("autAnim").classList.remove("hovered")
}

async function submit() {
    const logos = document.getElementById('send')
    const timeline = anime.timeline({
        targets: '#send',
        duration: 1000,
        easing : "easeOutExpo"
    })
    timeline.add({
        opacity: 0,
        easing : "easeOutExpo"
    })
    .add({
        duration: 2000,
        opacity: 0,
        easing : "easeOutExpo"
    })
    .add({
        duration: 10000,
        opacity: 1,
        easing : "easeOutExpo"
    })
    await delay(1000)
    logos.innerHTML = "<p style='font-size:50px;'>You're gonna be our best friend!</p>"
}

function cat(index) {
    switch (index) {
        case 4:
            
            break;
        case 3:
            
            break;
        case 2:
            
            break;
        case 1:
            
            break;
    
        default:
            break;
    }
}

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}