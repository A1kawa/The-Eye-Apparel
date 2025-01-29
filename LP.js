const IntCircle = "M66 33C66 51.2254 51.2254 66 33 66C14.7746 66 0 51.2254 0 33C0 14.7746 14.7746 0 33 0C51.2254 0 66 14.7746 66 33Z"
const IntHead = "M0 0H1920V60H0V0Z"
const IntSVG = document.querySelector('#head')
const header = document.getElementById('header')
let toggle = false



function Change() {
    const timeline = anime.timeline({
        duration : 500,
        easing : "easeOutExpo"
    })
    timeline.add({
        targets: "#headForm",
        d: [
            {value: IntCircle}
        ],
    })
    IntSVG.setAttribute('width', `66`)
    IntSVG.setAttribute('height', `66`)
    IntSVG.setAttribute('viewBox', `0 0 66 66`)
    header.style.position = 'fixed'
    header.style.top = '20px'
    header.style.left = '20px'
}

function ChangeBack() {
    const timeline = anime.timeline({
        duration : 500,
        easing : "easeOutExpo"
    })
    timeline.add({
        targets: "#headForm",
        d: [
            {value: IntHead}
        ],
    })
    IntSVG.setAttribute('width', `1920`)
    IntSVG.setAttribute('height', `60`)
    IntSVG.setAttribute('viewBox', `0 0 1920 60`)
    header.style.position = 'absolute'
    header.style.top = ''
    header.style.left = ''
}

window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY; // Quantidade de scroll vertical
    console.log(`Você rolou: ${scrollTop} pixels`);
    if (scrollTop > 0 && toggle == false) {
        toggle = true
        Change()
    } else if (scrollTop == 0 && toggle == true) {
        toggle = false
        ChangeBack()
    }
});

