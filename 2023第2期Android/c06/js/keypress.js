let messageElement = document.getElementById('message');
let lastkeyElement = document.getElementById('lastKey');
let charDisplay = document.getElementById('charactersLeft');

messageElement.addEventListener('keyup', (event) => {
    lastkeyElement.textContent = `最後一個key:${event.key},keycode:${event.code}`;
    let textEntered = messageElement.value
    let counter = 180-textEntered.length
    charDisplay.textContent = `還剩下:${counter}個字`
});
