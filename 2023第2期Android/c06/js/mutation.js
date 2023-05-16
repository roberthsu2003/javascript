let addElement = document.querySelector('a.add')
let ulElement = document.querySelector('#list')
let counterElement = document.getElementById('counter')

addElement.addEventListener('click', (event)=>{
    console.log('click')    
    event.preventDefault()
    let liElement = document.createElement('li')
    let textnode = document.createTextNode("New Item")
    liElement.appendChild(textnode)
    ulElement.appendChild(liElement)    
})

const config = { attributes: true, childList: true, subtree: true };

const observer = new MutationObserver((mutationsList, observer) => {
    let listItems = ulElement.getElementsByTagName('li').length;
    counterElement.innerText = listItems;
});

observer.observe(ulElement, config);
