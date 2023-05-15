let ElementOne = document.getElementById('one')
//let innerHTML_string = ElementOne.innerHTML
let innerText_string = ElementOne.innerText
let textContent_string = ElementOne.textContent

let msg = '<p>textContent:' + textContent_string +'</p>'
msg += '<p>innerText:' + innerText_string + '</p>'

let elementResults = document.getElementById('scriptResults')
elementResults.innerHTML = msg
ElementOne.textContent  = '被取代了'
