const h1 = document.querySelector('h1')
const h2s = document.querySelectorAll('h2')
const h3s = document.querySelectorAll('h3')
const pTags = document.querySelectorAll('p')
const links = document.querySelectorAll('a')
const listItems = document.querySelectorAll('li')
const togglerIcon = document.querySelector('.navbar-toggler-icon')
let iconNumber = 0
togglerIcon.addEventListener('click', ()=> {
    iconNumber++
    if (iconNumber % 2 === 0) { 
      togglerIcon.innerHTML =  '<i class="fa-sharp fa-solid fa-angle-down"></i>'
    }
    else {
    togglerIcon.innerHTML = '<i class="fa-solid fa-angle-up"></i>'
    }
})
