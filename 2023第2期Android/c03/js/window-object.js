let msg = '<h2>browser window</h2>'
msg += `<p>browser_width:${window.innerWidth}</p>`
msg += `<p>browser_height:${window.innerHeight}</p>`
msg += `<p>螢幕寬度:${window.screen.width}</p>`
msg += `<p>螢幕高度:${window.screen.height}</p>`

info_element = document.getElementById('info')
info_element.innerHTML = msg;
//window.alert(`現在browser位置${window.location}`)
favDialog_element = document.getElementById('favDialog')
favDialog_element.showModal();
//favDialog_element.show();
