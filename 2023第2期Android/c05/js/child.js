let ul_element = document.getElementsByTagName('ul');
console.log(ul_element)
let first_child = ul_element.firstChild;
let last_child = ul_element.lastChild;

first_child.className = 'complete';
last_child.className = 'cool';