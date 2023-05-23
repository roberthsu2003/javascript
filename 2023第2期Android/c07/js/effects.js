let h2Element = document.querySelector('h2')
$(h2Element).hide().slideDown()
let liElements = document.querySelectorAll('li')
liElements.forEach((element)=>{
    $(element).hide().delay(700).fadeIn(700)
})