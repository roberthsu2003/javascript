let addElement = document.querySelector('a.add')
let ulElement = document.querySelector('#list')

addElement.addEventListener('click', (event)=>{
    console.log('click')    
    event.preventDefault()
    let liElement = document.createElement('li')
    let textnode = document.createTextNode("New Item")
    liElement.appendChild(textnode)
    ulElement.appendChild(liElement)    
})