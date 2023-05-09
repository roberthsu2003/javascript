let ul_element = document.getElementsByTagName('ul')[0];
console.log(ul_element)
let first_child = ul_element.firstElementChild;
let last_child = ul_element.lastElementChild;

first_child.className = 'complete';
last_child.className = 'cool';
