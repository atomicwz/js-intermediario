const slide = document.querySelectorAll('.verificar')
const test = document.querySelectorAll('.slide')
const btnNext = document.querySelector('.next')
const btnBack = document.querySelector('.back')
let max = slide.length - 1
let i = 0

function nextSlide(){

    btnBack.style.opacity = '100%'
    
    slide[i].classList.add('ativo')
    
    
    
    if(i >= max){
        btnNext.style.opacity = '20%'
    }

    i++
}

const button = document.querySelectorAll('button')



function backSlide(){
    i--   
    slide[i].classList.remove('ativo')
    
}
button[1].addEventListener('click', nextSlide)
button[0].addEventListener('click', backSlide)



