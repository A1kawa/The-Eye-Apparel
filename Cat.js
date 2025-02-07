const gridL = document.getElementById('gridL')
const gridM = document.getElementById('gridM')
const gridS = document.getElementById('gridS')
let sortToggle = false

function sort() {
    if (sortToggle == false) {
        sortToggle = true
        console.log('oi')
        document.getElementById('sortOut').style.height = '180px'
        document.getElementById('sorting').style.opacity = 1
        anime({
            targets: '#sortArrow',
            d: [{value: 'M2 14C2 14 11 2 12 2C13 2 22 14 22 14'}],
            duration: 500,
            easing: 'easeOutExpo'
        })
    } else {
        sortToggle = false
        document.getElementById('sortOut').style.height = '50px'
        document.getElementById('sorting').style.opacity = ''
        anime({
            targets: '#sortArrow',
            d: [{value: 'M2 2C2 2 11 14 12 14C13 14 22 2 22 2'}],
            duration: 500,
            easing: 'easeOutExpo'
        })
    }

}

function product(prod) {
    setInterval(function(){
        window.location.href = prod;
    }, 500)
}

gridL.addEventListener('click', function(){
    gridL.style.opacity = 1
    gridS.style = ''
    gridM.style = ''
    document.documentElement.style.setProperty("--backImg-width", '36.1rem')
    document.documentElement.style.setProperty("--catBuy-bottom", '12%')
    document.documentElement.style.setProperty("--catBuy-right", '4%')
    document.documentElement.style.setProperty("--price", 'fit-content')
    document.documentElement.style.setProperty("--gap-text", '10px')
    document.documentElement.style.setProperty("--num-col-grid", 3)
    document.documentElement.style.setProperty("--gap-pad", 10)
})
gridM.addEventListener('click', function(){
    gridM.style.opacity = 1
    gridS.style = ''
    gridL.style = ''
    document.documentElement.style.setProperty("--backImg-width", '26.07rem')
    document.documentElement.style.setProperty("--catBuy-bottom", '17%')
    document.documentElement.style.setProperty("--catBuy-right", '7.5%')
    document.documentElement.style.setProperty("--price", 'fit-content')
    document.documentElement.style.setProperty("--gap-text", '10px')
    document.documentElement.style.setProperty("--num-col-grid", 4)
    document.documentElement.style.setProperty("--gap-pad", 20)
})
gridS.addEventListener('click', function(){
    gridS.style.opacity = 1
    gridM.style = ''
    gridL.style = ''
    document.documentElement.style.setProperty("--backImg-width", '16.3rem')
    document.documentElement.style.setProperty("--catBuy-bottom", '27.5%')
    document.documentElement.style.setProperty("--catBuy-right", '7.5%')
    document.documentElement.style.setProperty("--gap-text", 0)
    document.documentElement.style.setProperty("--price", 0)
    document.documentElement.style.setProperty("--num-col-grid", 6)
    document.documentElement.style.setProperty("--gap-pad", 30)
})