const input = document.querySelectorAll('input')
const aviso = document.querySelectorAll('.validacao')
const submit = document.querySelector('button')
const textinput = document.querySelector('textarea')

function validacaoForm(){

    const form1 = input[0].value
    const form2 = input[1].value
    const form3 = input[2].value

    if(form1 == ''){
        aviso[0].style.opacity = '100%';
    }else{
        input[0].style.border = '3px solid rgb(121, 216, 121)'
    }


    if(form2 == ''){
        aviso[1].style.opacity = '100%';
    }else{
        input[1].style.border = '3px solid rgb(121, 216, 121)'
    }


    if(form3 == ''){
        aviso[2].style.opacity = '100%';
    }else{
        input[2].style.border = '3px solid rgb(121, 216, 121)'
    }


    if(textinput.value == ''){
        aviso[3].style.opacity = '100%';
    }else{
        textinput.style.border = '3px solid rgb(121, 216, 121)'
    }



    
}
submit.addEventListener('click', validacaoForm)

