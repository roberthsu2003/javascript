let liElements = document.querySelectorAll('li')
liElements.forEach((element)=>{
    element.addEventListener('click',(event)=>{
        let liElement = event.currentTarget
        console.log(liElement)
    })
})