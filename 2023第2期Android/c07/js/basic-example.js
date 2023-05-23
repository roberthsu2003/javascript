let liElements = document.querySelectorAll('li')
liElements.forEach((element)=>{
    element.addEventListener('click',(event)=>{
        let liElement = event.currentTarget
        $(liElement).hide(1000,()=>{
            liElement.remove()
        })
    })
})