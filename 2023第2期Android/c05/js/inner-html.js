let oneElement = document.getElementById('one')
let innerHtml_string = oneElement.innerHTML
oneElement.innerHTML =  '<a href=\"http://www.google.com\">' + innerHtml_string + '</a>'