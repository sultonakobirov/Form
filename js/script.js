let requiredInput = document.querySelectorAll('.required')
let requiredBox = document.querySelectorAll('.required-box')
let submitButton = document.querySelector('button')
function handleFormSubmit(event) {
    event.preventDefault()
}

submitButton.onclick = ()=>{
    for (let item of requiredInput){
        if (item.value.trim() == '') {
            item.classList.add('red')
            requiredBox.forEach(elem =>{
                let a = elem.querySelectorAll('span')
                for (let i of a) {
                i.classList.add('red-color')
                if(i.className == 'need-fill red-color')
                    i.innerHTML = 'Please enter your email adress'
                    submitButton.style.backgroundColor = '#EE0004'

                }
            })
        } else if (item.value.trim() !== ''){
            item.classList.remove('red')
            requiredBox.forEach(elem =>{
                let a = elem.querySelectorAll('span')
                for (let i of a) {
                    i.classList.remove('red-color')
                    i.classList.add('blue-color')
                    if(i.className == 'need-fill blue-color'){
                        i.innerHTML = 'Need to fill'
                        submitButton.style.backgroundColor = '#543FD3'
                }
                }
            })
        }
    }
}
