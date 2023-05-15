document.getElementById('username').addEventListener('focus', (event) => {
    let feedbackElement = document.getElementById('feedback');
    feedbackElement.className = 'tip';
    feedbackElement.innerText = 'username最少要5個字元';
});

document.getElementById('username').addEventListener('blur', (event) => {
    let feedbackElement = document.getElementById('feedback');
    let usernameElement = event.currentTarget
    if (usernameElement.value.length < 5) {
        feedbackElement.className = 'warning';
        feedbackElement.innerText = 'username最少要5個字元';
    } else {
        feedbackElement.innerText = '';
    }
})