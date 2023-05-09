/*
let first_element = document.querySelector('li.hot');
first_element.className = 'cool'
*/

let all_elements  =  document.querySelectorAll('li.hot')
console.log(all_elements.length)
/*
all_elements.forEach((currentElement)=>{
    currentElement.className = 'cool'
})
*/

for(let i=0; i<all_elements.length; i++ ){
    all_elements[i].className = 'cool'
}