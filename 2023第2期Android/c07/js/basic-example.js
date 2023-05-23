let liElements = document.querySelectorAll('li')
liElements.forEach((element)=>{
    element.addEventListener('click',(event)=>{
        let liElement = event.currentTarget
        $(liElement).hide(1000,()=>{
            console.log("hide結束")
        }).show(1000,()=>{
            console.log("show結束")
        })
    })
})