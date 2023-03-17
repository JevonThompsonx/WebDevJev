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
