let indicators = document.querySelector('.block')
let form = document.querySelector('form')

function indi(indispan, classes) {
    let a = 0
    for (item of indispan) {
        a++
        indicators.querySelector(`.${classes}`).innerHTML = a
    }
}
indi(document.querySelectorAll('.required'), 'need')
indi(document.querySelectorAll('input'), 'all')
let i = 0
form.addEventListener('submit', function (event) {
    event.preventDefault()
    for (let item of this.querySelectorAll('input')) {
        if (item.value == '' && item.classList.contains('required')) {
            item.classList.add('red')
            item.nextElementSibling.classList.add('red-color')
            item.previousElementSibling.classList.add('red-color')
            item.nextElementSibling.innerHTML = 'Please enter your email adress'
            document.querySelector('button').style.backgroundColor = '#EE0004'
        } else if(item.value !== '' && item.classList.contains('required')){
            i++
            item.classList.remove('red')
            item.nextElementSibling.classList.remove('red-color')
            item.previousElementSibling.classList.remove('red-color')
            item.nextElementSibling.innerHTML = 'Need to fill'
            document.querySelector('button').style.backgroundColor = '#543FD3'
            if (i == 7) {
                const formData = new FormData(event.target);
                const data = Object.fromEntries(formData.entries());
                console.log(data);
            }
        }
        let a = 0
        let b = 0
        for (let elem of document.querySelectorAll('input')) {
            if (elem.value == ''){
                a++
                indicators.querySelector(`.error`).innerHTML = a
            }else if (elem.value !== ''){
                b++
                indicators.querySelector(`.success`).innerHTML = b
            }
        }
    }
})