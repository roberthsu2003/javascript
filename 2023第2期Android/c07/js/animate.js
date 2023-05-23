let liElements = document.querySelectorAll('li')
liElements.forEach((element)=>{
    element.addEventListener('click',(event)=>{
        let liElement = event.currentTarget
        $(liElement).animate({
            opacity: 0.2,
            paddingLeft: "+=80",
        },1000,()=>{
            liElement.remove()
        })
    })
})