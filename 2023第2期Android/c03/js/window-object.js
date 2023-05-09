let msg = '<h2>browser window</h2>'
msg += `<p>browser_width:${window.innerWidth}</p>`
msg += `<p>browser_height:${window.innerHeight}</p>`

info_element = document.getElementById('info')
info_element.innerHTML = msg;
