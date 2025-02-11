let imgs = (document.getElementsByClassName('NavImg').length) -1
let toggleDesc = false
let quantity = 1
let color = 0
let size = 0
let tDesc = false
let tSiz = false
let tCare = false
let tShip = false
sessionStorage.setItem("prods", 0)

window.onload = function(){
    document.getElementsByClassName('NavImg')[0].style.opacity = 1
}

function setImg(param) {
    const len = imgs
    while (imgs >= 0) {
        document.getElementsByClassName('NavImg')[imgs].style.opacity = .5
        imgs--
    }
    document.documentElement.style.setProperty("--img-row", ((param - 1) * 100))
    document.getElementsByClassName('NavImg')[(param - 1)].style.opacity = 1
    imgs = len
}
function setDesc(param){
    if (param <= 3) {
        let ind = 3
        while (ind >= 0) {
            document.getElementsByClassName('but')[ind].style.backgroundColor = ''
            document.getElementsByClassName('but')[ind].style.color = ''
            ind--
        }
        document.getElementsByClassName('but')[param].style.backgroundColor = '#D9D9D9'
        document.getElementsByClassName('but')[param].style.color = '#009AC2'
        size = (document.getElementsByClassName('but')[param].innerText)
    } else {
        let ind = (document.getElementsByClassName('col').length) - 1
        while (ind >= 0) {
            document.getElementsByClassName('col')[ind].style.backgroundColor = ''
            document.getElementsByClassName('col')[ind].style.color = ''
            ind--
        }
        document.getElementsByClassName('col')[param - 4].style.backgroundColor = '#D9D9D9'
        document.getElementsByClassName('col')[param - 4].style.color = '#009AC2'
        color = (document.getElementsByClassName('col')[param - 4].innerText)
    }
}
function setQnt(param){
    if (param == 0 && quantity > 1) {
        quantity--
    } else if (param == 1) {
        quantity++
    }
    document.getElementById('qnt').innerText = quantity
}

function add() {
    if (color == 0 || size == 0) {
        console.log(color, size)
        localStorage.clear()
        return;
    } else {
        const prod = {name: (document.getElementById("name").innerText), color: color, size: size, qnt: quantity}
        sessionStorage.setItem("prods", (Number.parseInt(sessionStorage.getItem("prods")) + 1))
        sessionStorage.setItem(`product0${sessionStorage.getItem("prods")}`, JSON.stringify(prod));
        console.log(prod)
        console.log(sessionStorage.getItem("prods"))
        console.log(JSON.parse(sessionStorage.getItem("product01")))
    }
}

function openDesc(ind) {
    switch (ind) {
        case 3:
            if (tShip == false) {
                document.getElementsByClassName('descP')[ind].style.height = '110px'
                tShip = true
            } else {
                document.getElementsByClassName('descP')[ind].style.height = '0px'
                tShip = false
            }
            break;
        case 2:
            if (tCare == false) {
                document.getElementsByClassName('descP')[ind].style.height = '215px'
                tCare = true
            } else {
                document.getElementsByClassName('descP')[ind].style.height = '0px'
                tCare = false
            }
            break;
        case 1:
            if (tSiz == false) {
                document.getElementsByClassName('descP')[ind].style.height = '150px'
                tSiz = true
            } else {
                document.getElementsByClassName('descP')[ind].style.height = '0px'
                tSiz = false
            }
            break;
        case 0:
            if (tDesc == false) {
                document.getElementsByClassName('descP')[ind].style.height = '430px'
                tDesc = true
            } else {
                document.getElementsByClassName('descP')[ind].style.height = '0px'
                tDesc = false
            }
            break;
    
        default:
            break;
    }
    
    //document.getElementsByClassName('descP')[ind].style.marginBottom = '5%'
}
function product(prod) {
    setInterval(function(){
        window.location.href = prod;
    }, 500)
}