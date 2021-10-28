const slide = document.querySelectorAll('.verificar')
const test = document.querySelectorAll('.slide')
const btnNext = document.querySelector('.next')
const btnBack = document.querySelector('.back')
let max = slide.length
let i = 0

function nextSlide(){
    if(i >= max) return;
    btnBack.style.opacity = '100%'
    
    slide[i].classList.add('ativo')
    
    
    
    if(i >= max - 1){
        btnNext.style.opacity = '20%'
    }

    i++
}

const button = document.querySelectorAll('button')

function backSlide(){
    if(i <= 0) return;
    i--   
    slide[i].classList.remove('ativo')
    btnNext.style.opacity = '100%'

    if(i == 0){

        btnBack.style.opacity = '20%'
    }
    
}

button[1].addEventListener('click', nextSlide)
button[0].addEventListener('click', backSlide)



