let requiredInput = document.querySelectorAll('.required')
let submitButton = document.querySelector('button')
let indicators = document.querySelector('.block')
let allInputs = document.querySelectorAll('input')

function indi(indispan, classes) {
    let a = 0
    for (item of indispan) {
        a++
        indicators.querySelector(`.${classes}`).innerHTML = a
    }
}
indi(requiredInput, 'need')
indi(allInputs, 'all')
    submitButton.onclick = ()=>{
        let a = 0
        let b = 0
        for (let elem of allInputs) {
            if (elem.value == ''){
                a++
                indicators.querySelector(`.error`).innerHTML = a
            }else{
                b++
                indicators.querySelector(`.success`).innerHTML = b
            }
        }
        for (let item of requiredInput){
            if (item.value == '') {
                item.classList.add('red')
                item.nextElementSibling.classList.add('red-color')
                item.previousElementSibling.classList.add('red-color')
                item.nextElementSibling.innerHTML = 'Please enter your email adress'
                submitButton.style.backgroundColor = '#EE0004'
            } else if (item.value !== ''){
                item.classList.remove('red')
                item.nextElementSibling.classList.remove('red-color')
                item.previousElementSibling.classList.remove('red-color')
                item.nextElementSibling.innerHTML = 'Need to fill'
                submitButton.style.backgroundColor = '#543FD3'
            }
        }
    }

// let form = document.querySelector('form')
// let input = document.querySelector('input')
// form.addEventListener('submit', ()=>{
//     console.log(input.value);
// })