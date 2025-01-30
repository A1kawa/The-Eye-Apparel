const IntCircle01 = "M56.3345 9.66548C69.2218 22.5528 69.2218 43.4472 56.3345 56.3345C43.4472 69.2218 22.5528 69.2218 9.66548 56.3345C-3.22183 43.4472 -3.22183 22.5528 9.66548 9.66548C22.5528 -3.22183 43.4472 -3.22183 56.3345 9.66548Z"
const IntCircle02 = "M135.5 9.66548C148.387 22.5528 148.387 90.6127 135.5 103.5C122.613 116.387 22.5528 116.387 9.66548 103.5C-3.22183 90.6127 -3.22183 22.5528 9.66548 9.66548C22.5528 -3.22183 122.613 -3.22183 135.5 9.66548Z"
const IntHead01 = "M0 0H1920V60H960H0V0Z"
const IntHead02 = "M0 0H1920V60H1440C1252.5 67.4219 1251 98 961 98C671 98 668.282 67.4065 480 60H0V0Z"
const IntSVG = document.querySelector('#head')
const header = document.getElementById('header')
const eyeSym = document.getElementById('eye')
let toggle = false
let scrollToggle = false



window.onload = async function () {
    const logos = document.getElementById('logo')
    const prot = "imgs/Prottection.png"
    const eye = "imgs/EyeLogo.png"
    let alternar = false
    await delay(1000)
    const timeline = anime.timeline({
        targets: '#logo',
        duration: 500,
        easing : "easeOutExpo"
    })
    timeline.add({
        targets: '#logo',
        duration: 500,
        scale: 0,
        easing : "easeOutExpo"
    })
    timeline.add({
        targets: '#logo',
        duration: 500,
        scale: 1,
        easing : "easeOutExpo"
    })
    await delay(500)
    logos.src = eye
    logos.style.left = "5%"

    setInterval(async() => {
        if (alternar) {
            console.log("Fazendo a primeira coisa...")
            const timeline = anime.timeline({
                targets: '#logo',
                duration: 500,
                easing : "easeOutExpo"
            })
            timeline.add({
                targets: '#logo',
                duration: 500,
                scale: 0,
                easing : "easeOutExpo"
            })
            timeline.add({
                targets: '#logo',
                duration: 500,
                scale: 1,
                easing : "easeOutExpo"
            })
            await delay(500)
            logos.src = eye
            logos.style.left = "5%"
        } else {
            console.log("Fazendo a segunda coisa...");
            const timeline = anime.timeline({
                targets: '#logo',
                duration: 500,
                easing : "easeOutExpo"
            })
            timeline.add({
                targets: '#logo',
                scale: 0,
                easing : "easeOutExpo"
            })
            timeline.add({
                targets: '#logo',
                scale: 1,
                easing : "easeOutExpo",
            })
            await delay(500)
            logos.src = prot
            logos.style.left = "11%"
        }
        alternar = !alternar; // Inverte o estado para a próxima execução
    },
    10000,
    )
}


function Change01() {
    const timeline = anime.timeline({
        duration : 200,
        easing : "easeOutExpo"
    })
    timeline.add({
        targets: "#headForm",
        d: [{value: toggle ? IntHead01 : IntHead02}],
    })
    .add({
        targets: "#head",
        height: toggle ? "60" : "98",
        viewBox: toggle ? "0 0 1920 60" : "0 0 1920 98"
    },"-=200")

    if (!toggle) {
        toggle = true
        document.getElementById('content').innerHTML = '<p href="">pupila</p>'
    } else {
        document.getElementById('content').innerHTML = ''
        toggle = false
    }

}

function Change02() {
    const timeline = anime.timeline({
        duration : 200,
        easing : "easeOutExpo"
    })
    timeline.add({
        targets: "#headForm",
        d: [{value: toggle ? IntCircle01 : IntCircle02}],
    })
    .add({
        targets: "#head",
        width: toggle ? "66" : "146",
        height: toggle ? "66" : "114",
        viewBox: toggle ? "0 0 66 66" : "0 0 146 114"
    },"-=200")

    if (!toggle) {
        toggle = true
    } else {
        toggle = false
    }

}

function ChangeRoll() {
    const timeline01 = anime.timeline({
        duration : 200,
        easing : "easeOutExpo"
    })
    timeline01.add({
        targets: "#headForm",
        d: [
            {value: scrollToggle ? IntCircle01 : IntHead01}
        ],
    })
    .add({
        targets: "#head",
        width: scrollToggle ? "66px" : "100%",
        height: scrollToggle ? '66px' : "60",
        viewBox: scrollToggle ? '0 0 66 66' : "0 0 1920 60"
    },
    "-=200"
    )
}

function getRoll() {
    console.log(window.scrollY)
}
window.addEventListener('scroll', function() {
    let scrollTop = window.scrollY

    if (scrollTop > 0 && scrollToggle == false) {
        scrollToggle = true
        ChangeRoll()
        header.style.position = 'fixed'
        header.style.top = '20px'
        header.style.left = '20px'
        header.style.width = 'fit-content'
        if (toggle == true) {
            toggle = false
            document.getElementById('content').innerHTML = ''
        }
    } else if (scrollTop == 0 && scrollToggle == true) {
        scrollToggle = false
        ChangeRoll()
        header.style.position = 'absolute'
        header.style.top = ''
        header.style.left = ''
        header.style.width = '100%'
        if (toggle == true) {
            toggle = false
            document.getElementById('content').innerHTML = ''
        }
    }

})

eyeSym.addEventListener('click', function (){
    if (scrollToggle == false) {
        Change01()
    } else {
        Change02()
    }
        
})

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}