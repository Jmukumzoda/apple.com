let btn1 = document.querySelector('.btn1')
let btn2 = document.querySelector('.btn2')
let aple = document.querySelector('.imac2')
let apple = document.querySelector('.imac3')
let ap = document.querySelector('.bac')
let app = document.querySelector('.bac2')
let text = document.querySelector('.text')
let text2 = document.querySelector('.texxt_11')

btn1.onclick = () => {
    if (btn1.classList.remove('bac2') || btn2.classList.remove('bac')) {

    }

    aple.setAttribute("src", "./img2/mbp14-spacegray-select-202110 1.png")
}
btn2.onclick = () => {
    if (btn1.classList.add('bac2') || btn2.classList.add('bac')) {
    }



    aple.setAttribute("src", "./img2/mbp14-silver-select-202110 1.png")
}

