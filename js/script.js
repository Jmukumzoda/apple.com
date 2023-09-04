let menu = document.querySelector('.menu')
let asside = document.querySelector('aside')
let ul_li = document.querySelector('.ul_li2')
let bg_menu = document.querySelector('.b_menu')
let exitBtn = document.querySelector('.exit-btn')

menu.onclick = () => {
    if (asside.style.left === '0%') {
        asside.style.left = '-100%'
    } else {
        asside.style.left = '0%'
    }
}
exitBtn.onclick = () => {
    asside.style.left = '-100%'
}



let oopen = document.querySelector('[data-open]')
let modal = document.querySelector('.modal')
let heaad = document.querySelector('.wraper')
let head = document.querySelector('.header2')
let nome = document.querySelector('.header3')
let Head = document.querySelector('header')
let bc = document.querySelector('.bc')


oopen.onmouseenter = () => {
    modal.classList.add('show', 'fade')
    Head.classList.add('bc')
    nome.classList.add('wraper')
    head.classList.add('wraper')
}
modal.onmouseleave = () => {
    modal.classList.remove('show', 'fade')
    nome.classList.remove('wraper')
    head.classList.remove('wraper')
    Head.classList.remove('bc')
}



let oopen2 = document.querySelector('[data-open_two]')
let modal2 = document.querySelector('.modal2')
oopen2.onmouseenter = () => {
    modal2.classList.add('show2', 'fade')
    Head.classList.add('bc')
    nome.classList.add('wraper')
    head.classList.add('wraper')
}
modal2.onmouseleave = () => {
    modal2.classList.remove('show2', 'fade')
    nome.classList.remove('wraper')
    head.classList.remove('wraper')
    Head.classList.remove('bc')
}

let oopen3 = document.querySelector('[data-open_theer]')
let modal3 = document.querySelector('.modal3')
oopen3.onmouseenter = () => {
    modal3.classList.add('show3', 'fade')
    Head.classList.add('bc')
    nome.classList.add('wraper')
    head.classList.add('wraper')
}
modal3.onmouseleave = () => {
    modal3.classList.remove('show3', 'fade')
    nome.classList.remove('wraper')
    head.classList.remove('wraper')
    Head.classList.remove('bc')
}

let oopen4 = document.querySelector('[data-open_four]')
let modal4 = document.querySelector('.modal4')
oopen4.onmouseenter = () => {
    modal4.classList.add('show4', 'fade')
    Head.classList.add('bc')
    nome.classList.add('wraper')
    head.classList.add('wraper')
}
modal4.onmouseleave = () => {
    modal4.classList.remove('show4', 'fade')
    nome.classList.remove('wraper')
    head.classList.remove('wraper')
    Head.classList.remove('bc')
}

let oopen5 = document.querySelector('[data-open_five]')
let modal5 = document.querySelector('.modal5')
oopen5.onmouseenter = () => {
    modal5.classList.add('show4', 'fade')
    Head.classList.add('bc')
    nome.classList.add('wraper')
    head.classList.add('wraper')
}
modal5.onmouseleave = () => {
    modal5.classList.remove('show4', 'fade')
    nome.classList.remove('wraper')
    head.classList.remove('wraper')
    Head.classList.remove('bc')
}

let oopen6 = document.querySelector('[data-open_six]')
let modal6 = document.querySelector('.modal6')
oopen6.onmouseenter = () => {
    modal6.classList.add('show5', 'fade')
    Head.classList.add('bc')
    nome.classList.add('wraper')
    head.classList.add('wraper')
}
modal6.onmouseleave = () => {
    modal6.classList.remove('show5', 'fade')
    nome.classList.remove('wraper')
    head.classList.remove('wraper')
    Head.classList.remove('bc')
}

let oopen7 = document.querySelector('[data-open_seven]')
let modal7 = document.querySelector('.modal7')
oopen7.onmouseenter = () => {
    modal7.classList.add('show6', 'fade')
    Head.classList.add('bc')
    nome.classList.add('wraper')
    head.classList.add('wraper')
}
modal7.onmouseleave = () => {
    modal7.classList.remove('show6', 'fade')
    nome.classList.remove('wraper')
    head.classList.remove('wraper')
    Head.classList.remove('bc')
}

let oopen8 = document.querySelector('[data-open_eight]')
let modal8 = document.querySelector('.modal8')
oopen8.onmouseenter = () => {
    modal8.classList.add('show7', 'fade')
    Head.classList.add('bc')
    nome.classList.add('wraper')
    head.classList.add('wraper')
}
modal8.onmouseleave = () => {
    modal8.classList.remove('show7', 'fade')
    nome.classList.remove('wraper')
    head.classList.remove('wraper')
    Head.classList.remove('bc')
}


let oopen9 = document.querySelector('[data-open_nine]')
let modal9 = document.querySelector('.modal9')
oopen9.onmouseenter = () => {
    modal9.classList.add('show8', 'fade')
    Head.classList.add('bc')
    nome.classList.add('wraper')
    head.classList.add('wraper')
}
modal9.onmouseleave = () => {
    modal9.classList.remove('show8', 'fade')
    nome.classList.remove('wraper')
    head.classList.remove('wraper')
    Head.classList.remove('bc')
}

let oopen10 = document.querySelector('[data-open_ten]')
let modal10 = document.querySelector('.modal10')
oopen10.onmouseenter = () => {
    modal10.classList.add('show9', 'fade')
    Head.classList.add('bc')
    nome.classList.add('wraper')
    head.classList.add('wraper')
}
modal10.onmouseleave = () => {
    modal10.classList.remove('show9', 'fade')
    nome.classList.remove('wraper')
    head.classList.remove('wraper')
    Head.classList.remove('bc')
}
let oneclic = document.querySelector('.btnn1')
let oneclic_2 = document.querySelector('.btnn2')
let border = document.querySelector('.buttons')
let sec2 = document.querySelector('.sec2')
let sec3 = document.querySelector('.sec3')
let btns = document.querySelector('.bbttnn1')
let btns2 = document.querySelector('.bbttnn2')
let btns3 = document.querySelector('.bbttnn3')
let sec4 = document.querySelector('.the_last_info')
let sec2_opas = document.querySelector('.opas')
let color = document.querySelector('.colors_li')
// let slider = document.querySelector('.img_slider')
oneclic.onclick = () => {
    oneclic.classList.add('buttons')
    sec2.classList.add('opas')
}
oneclic_2.onclick = () => {
    oneclic_2.classList.add('buttons')
    sec2.classList.add('opas')
}
btns.onclick = () => {
    sec4.classList.add('opas')
}
btns2.onclick = () => {
    sec4.classList.add('opas')
}
btns3.onclick = () => {
    sec4.classList.add('opas')
}
// color.onclick = () => {
//     slider.setAttribute('scr', './img/iphone-14-finish-select-202209-6-7inch_AV1.jpeg')
// }

let svg = document.querySelector('.bttn1')
let svgg = document.querySelector('.modaall')
let exet = document.querySelector('.mod_img')
svg.onclick = () => {
    svgg.classList.add('show_modal', 'fade')
}
exet.onclick = () => {
    svgg.classList.remove('show_modal', 'fade')
}

let bttn2 = document.querySelector('.bttn2')
let svg3 = document.querySelector('.modaall3')
let exet3 = document.querySelector('.mod3_img')
bttn2.onclick = () => {
    svg3.classList.add('show3_modal', 'fade3')
}
exet3.onclick = () => {
    svg3.classList.remove('show3_modal', 'fade3')
}


let btnn3 = document.querySelector('.btnn3')
let svgg2 = document.querySelector('.modaall2')
let exet2 = document.querySelector('.mod2_img')
btnn3.onclick = () => {
    svgg2.classList.add('show2_modal', 'fade2')
}
exet2.onclick = () => {
    svgg2.classList.remove('show2_modal', 'fade2')
}

const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('.img_slider');
let currentImageIndex = 0;

function showNextImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex++;

  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }


  images[currentImageIndex].classList.add('active');
}


images[currentImageIndex].classList.add('active');

setInterval(showNextImage, 5000);


